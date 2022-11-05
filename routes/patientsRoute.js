const express = require('express');
const router = express.Router();

const PatientController = require('../controller/PatientController.js');

router.get('/', PatientController.findAll);

router.post('/create', PatientController.createPatient);

router.get('/getPatientSexById/:id', PatientController.getPatientSexById);

module.exports = router;
