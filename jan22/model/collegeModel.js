const { name } = require("ejs")
const mongoose=require("mongoose")
const { contact } = require("../controller/collegeController")




const contactSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    address:String
})

module.exports=mongoose.model("contact",contactSchema)