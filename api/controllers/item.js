const router = require('express').Router();

const { Item } = require('../models');
const passport = require('../middlewares/authentication');

router.get('/', passport.isAuthenticated(), (req, res) => {
  res.json({ msg: 'meow' });
});

router.post('/create', passport.isAuthenticated(), (req, res) => {
  Item.create({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    zipcode: req.body.zipcode,
    donatorId: req.user.id,
    receiverId: null,
    categoryId: null
  })
    .then(result => { res.json(result) })
    .catch(err => { res.status(400).json({ error: err }) });
});

module.exports = router;