
const express=require("express")
const router=express.Router()
const stuController=require("../controllers/stuControllers")

router.post('/data',stuController.datasave)
router.get('/data',stuController.getdata)
router.post('/getdata',stuController.dataSearch)
router.get('/dataupdate',stuController.getdata)
router.post('/delete',stuController.deleteData)
module.exports=router

