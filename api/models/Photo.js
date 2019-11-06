'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model { }

  Photo.init({
    url: { type: DataTypes.STRING(2083), allowNull: false }
  }, {
      sequelize,
      modelName: 'photo'
    });

  Photo.associate = models => {
    models.Photo.belongsTo(models.Item);
  };

  return Photo;
};