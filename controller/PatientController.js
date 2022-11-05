//const Patient = require('../models/patients.js');
const PatientService = require('../service/PatientService.js');

const patientService = new PatientService();

class PatientController {
  static async createPatient(req, res) {
    try {
      const {patient} = req.body;
      await patientService.create(patient);
      res.sendStatus(200);
    } catch (error) {
      res.json({message: error.message});
    }
  }

  static async findAll(req, res) {
    try {
      res.status(200).json(await patientService.findAll());
    } catch (error) {
      res.json({message: error.message});
    }
  }

  static async getPatientSexById(req, res) {
    try {
      const id = req.params.id;
      const sex = await patientService.getPatientSexById(id);
      res.json(sex.name);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }
}

module.exports = PatientController;
