'use strict';
const { Model } = require('sequelize');
const bcrypt    = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    username    : { type: DataTypes.STRING },
    email       : { type: DataTypes.STRING, unique: true, validate: { isEmail: true }, },
    passwordHash: { type: DataTypes.STRING },
    password    : { type: DataTypes.VIRTUAL }
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = models => {
    // Define associations here.
  };

  User.beforeSave((user, options) => {
    if (user.password) user.passwordHash = bcrypt.hashSync(user.password, 10);
  })

  return User;
};