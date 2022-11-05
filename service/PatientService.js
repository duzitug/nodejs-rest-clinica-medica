const db = require('../models');
const Service = require('./Service.js');

const {Sex} = require('../models');

class PatientService extends Service {
  constructor() {
    super('Patient');
  }

  async getPatientSexById(id) {
    const patient = await db[this.modelName].findByPk(id, {include: Sex});

    const sex = await patient.getSex();

    return sex;
  }
}

module.exports = PatientService;
