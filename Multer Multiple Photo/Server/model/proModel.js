


const mongoose=require("mongoose")

const proSchema=new mongoose.Schema({
    product:String,
    price:Number,
    quantity:Number,
    brand:String,
    defaultImages:String,
    images:[String]
})

module.exports=mongoose.model("product",proSchema)