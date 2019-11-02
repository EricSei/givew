const express = require('express');
const router = express.Router();

const passport = require('../middlewares/authentication');

router.get('/', passport.isAuthenticated(), (req, res) => {
  res.json({
    title: 'APP TITLE',
    description: 'A short description about this app',
  });
});


module.exports = router;