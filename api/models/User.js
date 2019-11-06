'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model { }

  User.init({
    username: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3,255],
      }
    },
    email: { type: DataTypes.STRING, unique: true, allowNull: false, validate: { isEmail: true }, },
    passwordHash: { type: DataTypes.STRING },
    password: { type: DataTypes.VIRTUAL, allowNull: false, validate: {notNull: true, len: [1, 255]} }
  }, {
      sequelize,
      modelName: 'user'
    });

  User.associate = models => {
    // Define associations here.
    models.User.hasMany(models.Item, { foreignKey: 'donatorId' });
    models.User.hasMany(models.Item, { foreignKey: 'receiverId' });
  };

  User.beforeSave((user, options) => {
    if (user.password) user.passwordHash = bcrypt.hashSync(user.password, 10);
  })

  return User;
};