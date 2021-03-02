'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userfavorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userfavorite.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    titles: DataTypes.STRING,
    culture: DataTypes.STRING,
    allegiances: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userfavorite',
  });
  return userfavorite;
};