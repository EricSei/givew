'use strict';
const { Model, QueryInterface } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Waitlist extends Model { }

  Waitlist.init(
    {
      message: {
        type: DataTypes.STRING(1023),
        allowNull: false
      }
    }, 
    {
      sequelize,
      modelName: 'waitlist'
    }
  );

  Waitlist.associate = models => {
    models.Waitlist.belongsTo(models.User, { foreignKey: 'receiverId' });
    models.Waitlist.belongsTo(models.Item, { foreignKey: 'itemId' });
  };

  return Waitlist;
};