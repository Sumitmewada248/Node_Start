

const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctorController');

router.post("/register", doctorController.registerDoctor);
router.get("/homedoctorsdisplay", doctorController.DoctorsDisplay);
router.post("/login", doctorController.loginDoctor);
router.post("/searchdoctor", doctorController.DoctorSearch);

module.exports = router;