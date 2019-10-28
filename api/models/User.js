'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class User extends Model { }

    User.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 250],
                notEmpty: true,
            },
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 250],
                notEmpty: true,
            },
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 250],
                notEmpty: true,
            },
            unique: true,
        },
    }, {
            sequelize,
            modelName: 'user'
        });

    User.associate = (models) => {
        // associations can be defined here
    };

    return User;
};