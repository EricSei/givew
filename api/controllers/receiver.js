const router = require('express').Router();

const { Waitlist } = require('../models');
const passport = require('../middlewares/authentication');

// @route GET /api/receiver/
// @desc Just a message.
// @access Public
router.get('/', (req, res) => {
  res.json({ msg: 'receiver route OwO' });
});

// @route POST /api/receiver/waitlist/create
// @desc Inserts a new row into Waitlist table.
// @access Private 
router.post('/waitlist/create', passport.isAuthenticated(), (req, res) => {
  Waitlist.create({
    mesage: req.body.message,
    recieverId: req.user.id,
    itemId: req.body.itemId
  })
    .then(result => { res.json(result) })
    .catch(err => { res.status(400).json({ error: err }) });
});

// @route GET /api/receiver/waitlist/
// @desc Retrieve all rows from waitlist that belong to this receiver.
// @access Private
router.get('/waitlist/', passport.isAuthenticated(), (req, res) => {
  Waitlist.findAll({ where: { recieverId: req.user.id } })
    .then(result => { res.json(result) })
    .catch(error => { res.status(400).json({ error }) });
});

module.exports = router;