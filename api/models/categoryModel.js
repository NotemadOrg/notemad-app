'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  category.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      journal_body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, 
    {
      // tablename: categorys
      sequelize,
      modelName: 'category',
    });

    category.associate = (models) => {
      // associations are defined here
      
      models.category.belongsTo(models.journal);
    }

  return category;
};