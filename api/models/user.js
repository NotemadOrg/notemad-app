'use strict';
const {  Model, AssociationError } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    // /**
    //  * Helper method for defining associations.
    //  * This method is not a part of Sequelize lifecycle.
    //  * The `models/index` file will call this method automatically.
    //  */
    // static associate(models) {
    //   // define association here
    // }

    // toJSON(){
    //   return { ...this.get(), id: undefined} 
    // }
  }

  user.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
        allowNull: false,
        unique: true
      },
      
      // username: {DataTypes.STRING,
      // email: DataTypes.STRING,
      // password: DataTypes.STRING
    }, 
    {
      // tablename: users
      sequelize,
      modelName: 'user',
    });

    user.associate = (models) => {
      // associations are defined here

      // This will add actorId to the journal model and table
      models.user.hasMany(models.journal);
    }


  
  return user;
};