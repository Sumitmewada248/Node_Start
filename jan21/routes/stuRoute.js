
const express=require("express")
const Router=express.Router()
const stuControllers=require("../controllers/stuControllers")
Router.get("/home",stuControllers.home)
Router.get("/about",stuControllers.about)
Router.get("/courses",stuControllers.courses)
Router.get("/fees",stuControllers.fees)


module.exports=Router