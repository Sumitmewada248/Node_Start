const mongoose=require("mongoose")

const workSchema=new mongoose.Schema({
    name:String,
    email:String,
   
})


module.exports=mongoose.model("worker",workSchema)