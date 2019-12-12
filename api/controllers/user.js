const router = require('express').Router();

const { User } = require('../models');
const passport = require('../middlewares/authentication');

router.get('/', passport.isAuthenticated(), (req, res) => {
  res.json(req.user);
});

router.put('/', passport.isAuthenticated(), (req, res) => {

  User.update(
    {
      username: req.body.username,
      email: req.body.email,
      // password: req.body.password // update later
    },
    {
      returning: true,
      where: { id: req.user.id }
    }
  )
    .then(([updatedRow, [updatedName]]) => {
      res.json({ updatedName });
    })

});

module.exports = router;