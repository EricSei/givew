'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model { }

  Item.init({

    name: { type: DataTypes.STRING, allowNull: false },
    description: {
      type: DataTypes.TEXT,

    },
    location: {
      type: DataTypes.TEXT,

    },
    zipcode: {
      type: DataTypes.INTEGER
    }
  }, {
      sequelize,
      modelName: 'item'
    });

  Item.associate = models => {
    models.Item.belongsTo(models.User, { foreignKey: 'donatorId' });
    models.Item.belongsTo(models.User, { foreignKey: 'receiverId' });
  };

  return Item;
};

