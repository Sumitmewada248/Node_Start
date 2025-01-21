const express=require("express")

const Route=express.Router()
const stuControllers=require("../controllers/stuController")

Route.get("/home",stuControllers.home)
Route.get("/about",stuControllers.about)
Route.get("/courses",stuControllers.courses)
Route.get("/fees",stuControllers.fees)

module.exports=Route