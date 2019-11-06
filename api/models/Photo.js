'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model { }

  Photo.init({
    url: { 
      type: DataTypes.STRING(2083), 
      allowNull: false,
      validate: {
        len: [2,2083],
        isUrl: true // isUrl validation may be disabled if fail for relative paths
      }
    }
  }, {
      sequelize,
      modelName: 'photo'
    });

  Photo.associate = models => {
    models.Photo.belongsTo(models.Item);
  };

  return Photo;
};