const {Doctor} = require('../models');
const DoctorService = require('../service/DoctorService.js');

const doctorService = new DoctorService();

class DoctorController {
  static async findAll(req, res) {
    try {
      const doctors = await doctorService.findAll();
      res.json(doctors);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }

  static async create(req, res) {
    try {
      const {doctor} = req.body;

      await doctorService.create(doctor);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }
}

module.exports = DoctorController;
