const router = require('express').Router();

const { User } = require('../models');
const passport = require('../middlewares/authentication');

router.get('/', passport.isAuthenticated(), (req, res) => {
  res.json(req.user);
});

router.put('/username', passport.isAuthenticated(), (req, res) => {

  User.update(
      { username: req.body.username },
      { returning: true,
        where:{ id: req.user.id}
      }
    )
    .then(([updatedRow,[updatedName]]) => {
      res.json({updatedName});
  })
 
});

module.exports = router;