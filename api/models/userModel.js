'use strict';
const {  Model, AssociationError } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class user extends Model { }

  user.init(
    {
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      passwordHash: {     // actually store in database
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.VIRTUAL,
        validate: {
          isLongEnough: (val) => {
            if (val.length < 7){
              throw new Error("Please enter a longer password");
            }
          },
        },
      },
    }, 
    {
      // tablename in psql: users
      sequelize,
      modelName: 'user',
    });

    user.associate = (models) => {
      // associations are defined here

      // This will add actorId to the journal model and table
      models.user.hasMany(models.journal);
    }

    user.beforeSave((userModel, options) => {
      if (userModel.password) {
        userModel.passwordHash = bcrypt.hashSync(userModel.password, 10);
      }
    })
    
  return user;
};