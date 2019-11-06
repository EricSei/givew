'use strict';
const { Model } = require('sequelize');
//const User = require('./User');

module.exports = (sequelize, DataTypes) => {
    class Item extends Model { }

    Item.init({

        name: { type: DataTypes.STRING, allowNull: false },
        description: {
            type: DataTypes.TEXT,

        },
        photos: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        location: {
            type: DataTypes.TEXT,

        },
        donator_id: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: User,
            //     key: 'id',
            // }
        },
        receiver_id: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: User,
            //     key: 'id',
            // }
        },
        // category_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'Category',
        //         key: 'id',
        //     }
        // }

    }, {
            sequelize,
            modelName: 'item'
        });

    Item.associate = models => {
        // Define associations here.
    };

    return Item;
};

