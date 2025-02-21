
const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
  
    password:String,
    mobile:Number,
    userid:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    }
    


})

module.exports=mongoose.model("user",userSchema)