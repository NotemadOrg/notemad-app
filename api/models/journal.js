'use strict';
const {
  Model
} = require('sequelize');
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
        validate: {
          notEmpty: true,
        },
        allowNull: false,
      },
      journal_body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      journal_photo: {
        type: DataTypes.STRING,
      },
      has_visited: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      // journal_title: DataTypes.STRING,
      // journal_body: DataTypes.STRING,
      // journal_photo: DataTypes.STRING,
      // has_visited: DataTypes.BOOLEAN
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
    }

  return journal;
};