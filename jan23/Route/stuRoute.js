
const express = require('express');
const route=express.Router();
const stCont=require('../controller/stuCotroller')



route.get("/home",stCont.Homepage);
route.get("/insert",stCont.Insertpage);
route.get("/display",stCont.Displaypage);    
route.post("/stusave",stCont.stusave);    

module.exports=route