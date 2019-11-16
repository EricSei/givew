'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Waitlist extends Model { }

  Waitlist.init({
      mesage: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'waitlist'
    });

    Waitlist.associate = models => {
      models.Waitlist.belongsTo(models.User, { foreignKey: 'recieverId' });
      models.Waitlist.belongsTo(models.Item, { foreignKey: 'itemId' });
  };

  return Waitlist;
};