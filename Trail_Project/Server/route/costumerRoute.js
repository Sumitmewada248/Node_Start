
const express=require("express")
const router=express.Router()
const controller=require("../controller/costumerController")

router.post("/login",controller.Login)
router.post("/register",controller.Registeration)
router.post("/authenticate",controller.userAuthenticate)
router.post('/deposite',controller.Deposite)

module.exports=router