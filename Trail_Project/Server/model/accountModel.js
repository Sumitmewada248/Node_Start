

const mongoose=require("mongoose")
const accountSchema=new mongoose.Schema({
  custoID:{type:mongoose.Schema.Types.ObjectId,ref:"costumer"},
accountNumber:{type:String,required:true},
balance:{type:Number,default:"0.00"},
transactionID:[{type:mongoose.Schema.Types.ObjectId,ref:"transaction"}],
})

module.exports=mongoose.model("account",accountSchema)