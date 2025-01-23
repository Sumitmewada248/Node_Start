
const express = require('express');
const route=express.Router();
const stuController = require("../controller/stuCotroller");


route.get("/home",stuController.home);
route.get("/insert",stuController.insert);
route.get("/display",stuController.display);


module.exports=route;