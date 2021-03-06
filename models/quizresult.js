"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class quizresult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.quizresult.belongsTo(models.user);
    }
  }
  quizresult.init(
    {
      userId: DataTypes.INTEGER,
      result: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "quizresult",
    }
  );
  return quizresult;
};
