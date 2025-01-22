const express = require('express');
const route = express.Router();
const model=require("../model/collegeModel")
const stuController = require("../controller/collegeController");

route.get('/home', stuController.home);
route.get('/about', stuController.about);
route.get('/courses', stuController.courses);
route.get('/faculty', stuController.faculty);
route.get('/contact', stuController.contact);


module.exports = route;