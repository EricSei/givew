const bcrypt        = require('bcryptjs');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models').User;

function passwordsMatch(submittedPassword, storedPassword) {
  return bcrypt.compareSync(submittedPassword, storedPassword);
}

// const localOptions = new LocalStrategy({ usernameField: 'email', passwordField: 'password' })
passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => {
  User.findOne({ where: { email } }).then((user) => {
    if (!user) return done(null, false, { message: 'Failed Login' });
    if (!passwordsMatch(password, user.passwordHash)) return done(null, false, { message: 'Failed Login' });
    return done(null, user, { message: 'Sucessfully Logged In!' });
  }).catch(err => done(err));
}));

passport.serializeUser((user, done) => { done(null, user.id) });
passport.deserializeUser((id, done) => {
  User.findByPk(id).then(user => {
    if (!user) {
      done(null, false);
      return;
    }

    done(null, user);
    return;
  }).catch(err => done(err, null));
});

passport.isAuthenticated = () =>
  (req, res, next) => (req.user? next() : res.sendStatus(401));

module.exports = passport;

