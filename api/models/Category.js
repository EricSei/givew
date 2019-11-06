'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model { }

  Category.init({
    name: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [2,255]
      }
    }
  }, {
      sequelize,
      modelName: 'category'
    });

  Category.associate = models => {
    models.Category.hasMany(models.Item);
  };

  return Category;
};