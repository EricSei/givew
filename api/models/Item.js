'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model { }

  Item.init({
    name: { 
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [2,255]
      } 
    },
    description: {
      type: DataTypes.TEXT
    },
    photos: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    category: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.TEXT
    },
    zipcode: {
      type: DataTypes.INTEGER
    }}, {
    sequelize,
    modelName: 'item'
  });

  Item.associate = models => {
    models.Item.belongsTo(models.User, { foreignKey: 'donatorId' });
    models.Item.belongsTo(models.User, { foreignKey: 'receiverId' });
    models.Item.hasMany(models.Waitlist, { foreignKey: 'itemId' });
  };

  return Item;
};

