const router = require('express').Router();

const passport = require('../middlewares/authentication');
const { User } = require('../models');

router.post('/signup', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(user => { req.login(user, () => res.status(201).json(user)) })
    .catch(err => { res.status(400).json({ msg: 'Failed Signup', err }) });
});

router.post('/signin', passport.authenticate('local'), (req, res) => { 
  res.json(req.user); 
});

router.post('/signout', (req, res) => { 
  req.logout();
  res.status(200).json({ message: "Logout Successful!" });
});

module.exports = router;