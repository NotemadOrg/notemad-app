'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class journal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  journal.init(
    {
      journal_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      journal_body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      journal_photo: {
        type: DataTypes.STRING,
        // currently allow null
      },
      has_visited: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        //allowNull: false,
      },
    }, 
    {
      // tablename: journals
      sequelize,
      modelName: 'journal',
    });

    journal.associate = (models) => {
      // associations are defined here

      // This will add userID as a column to the journal table
      models.journal.belongsTo(models.user);
      models.journal.belongsTo(models.category);
    }

  return journal;
};