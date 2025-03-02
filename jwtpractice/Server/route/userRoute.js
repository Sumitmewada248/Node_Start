

const express=require("express")
const router=express.Router()
const userController=require("../controller/UserController")


router.post("/register", userController.Register)
router.post("/login",userController.Login)
router.post("/authentic",userController.Authentic)

module.exports=router