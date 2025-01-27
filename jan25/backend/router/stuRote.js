
const express=require('express')
const router=express.Router()
const stuController=require('../controller/stuController')

router.post('/datasave',stuController.datasave)
router.get('/getdata',stuController.getdata)
router.post('/getdata',stuController.dataSearch)
    
module.exports=router