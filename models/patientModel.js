'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Sex, {
        foreignKey: 'id',
        sourceKey: 'sex_id',
      });
    }
  }
  Patient.init(
    {
      cpf: DataTypes.STRING,
      nome: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      sex_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Patient',
      underscored: true,
      tableName: 'patients',
    }
  );
  return Patient;
};
