

const express=require("express")
const router=express.Router()
const controller=require("../controller/UserController")

router.post("/registration",controller.Registration)
router.post("/login",controller.Login)
router.post ("/userauthenticate",controller.userAuthenticate)

module.exports=router