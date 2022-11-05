'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Doctor.init(
    {
      name: DataTypes.STRING,
      crm: DataTypes.STRING,
      cpf: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Doctor',
      underscored: true,
      tableName: 'doctors',
    }
  );
  return Doctor;
};
