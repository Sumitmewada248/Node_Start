

const mongoose=require("mongoose")

const costumerSchema=new mongoose.Schema({
    accountID:{type:mongoose.Schema.Types.ObjectId,ref:"account"},
    name:{type:String,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true},
    city:{type:String,required:true},
    mobile:{type:String,required:true},
    pincode:{type:String,required:true},
    accountType:{type:String,required:true},
    createdAt: { type: Date, default: Date.now},
    password:{type:String,required:true}

})

module.exports=mongoose.model("costumer",costumerSchema)