

const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');

router.post('/insert', UserController.insertUser);
router.get('/display', UserController.displayUser);


module.exports = router;