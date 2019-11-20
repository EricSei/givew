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

module.exports = router;