const router = require('express').Router();

const { User } = require('../models');
const passport = require('../middlewares/authentication');

router.get('/', passport.isAuthenticated(), (req, res) => {
  res.json(req.user);
});

module.exports = router;