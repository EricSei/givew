const router = require('express').Router();

const passport = require('../middlewares/authentication');
const { Item } = require('../models');

// @route GET /api/donator/
// @desc Simple message.
// @access Public
router.get('/', (req, res) => {
  res.json({ msg: 'receiver route OwO' });
});

// @route GET /api/donator/bidlist/
// @desc Retrieve all items that the donator donated.
// @access Private
router.get('/bidlist/', passport.isAuthenticated(), (req, res) => {
  Item.findAll({ where: { donatorId: req.user.id } })
    .then(result => { res.json(result) })
    .catch(error => { res.status(400).json({ error }) });
});

// @route GET /api/donator/bidlist/item/:id
// @desc Retrieve a single item from donator's bidlist.
// @access Private
router.get('/bidlist/item/:id', passport.isAuthenticated(), (req, res) => {
  Item.findOne({ where: { donatorId: req.user.id, id: req.params.id } })
    .then(result => { res.json(result) })
    .catch(error => { res.status(400).json({ error }) });
});

module.exports = router;