const express = require('express');
const DoctorController = require('../controller/DoctorController.js');
const router = express.Router();

router.post('/create', DoctorController.create);

router.get('/findAll', DoctorController.findAll);

module.exports = router;
