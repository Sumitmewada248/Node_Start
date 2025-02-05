
const express=require("express")
const router=express.Router()
const stuController=require("../controllers/stuControllers")

router.post('/data',stuController.datasave)
router.get('/data',stuController.getdata)
router.post('/getdata',stuController.dataSearch)
module.exports=router

