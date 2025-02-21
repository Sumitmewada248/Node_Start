const workerModel=require("../model/workmodel")
const userModel=require("../model/userModel")
const { response } = require("express")
const insertWorker=async(req,res)=>{

    const {name,email,password,mobile}=req.body
    const worker=await workerModel.create({
        name:name,
    email:email 
    })
   const user=await userModel.create({
        password:password,
        mobile:mobile,
        userId:worker._id
    })
  res.send(worker)
}

const displayWorker=async(req,res)=>{
    const worker=await workerModel.find().populate("userid")
    res.send(worker)

}


module.exports={
    insertWorker,
    displayWorker
}