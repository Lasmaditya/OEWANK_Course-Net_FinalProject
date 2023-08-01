'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.budget)
      User.belongsToMany(models.saving)
      User.hasMany(models.transaction)
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    address: DataTypes.STRING,
    handphone: DataTypes.STRING,
    password: DataTypes.STRING,
    budgetId: DataTypes.INTEGER,
    savingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};