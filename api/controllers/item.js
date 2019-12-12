const router     = require('express').Router();
const multer     = require('multer');
const cloudinary = require('cloudinary').v2;

const { Item } = require('../models');
const passport = require('../middlewares/authentication');

// ----------------------------------------------------------------------------
// Middleware Setup
// ----------------------------------------------------------------------------

const storage = multer.diskStorage({
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });

// ----------------------------------------------------------------------------
// Cloudinary Setup
// ----------------------------------------------------------------------------
cloudinary.config({
  cloud_name: 'imagicat',
  api_key: '582611221428748',
  api_secret: process.env.CLOUDINARY_SECRET
});

// ----------------------------------------------------------------------------
// Routes
// ----------------------------------------------------------------------------

router.get('/', passport.isAuthenticated(), (req, res) => {
  res.json({ msg: 'meow' });
});

router.post('/create', passport.isAuthenticated(), upload.array('photos'), async (req, res) => {
  let photos = [];
  const timeSlots = req.body.dateTimes.split(',').map(dt => new Date(dt));
  
  for (let file of req.files) {
    await cloudinary.uploader.upload(file.path, async (error, result) => {
      photos.push(result.secure_url);
    });
  }

  Item.create({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    zipcode: req.body.zipcode,
    donatorId: req.user.id,
    receiverId: null,
    category: req.body.category,
    photos: photos,
    timeSlots: timeSlots
  })
    .then(result => { res.json(result) })
    .catch(err => { res.status(400).json({ error: err }) });
});

router.get('/sort', (req, res) => {
  let queries = [];
  for (let query in req.query) {
    queries.push([query, req.query[query]]);
  }
  Item.findAll({ order: queries, where: { receiverId: null } })
    .then(result => { res.json(result) })
    .catch(error => { res.status(400).json({ error }) });
});

router.get('/reserved', passport.isAuthenticated(), (req, res) => {
  const id = req.user.id;
  Item.findAll({ where: { receiverId: id }})
  .then(result => {
    res.json(result)
  })
  .catch(error => { res.status(404).json({ error }) })
});

module.exports = router;