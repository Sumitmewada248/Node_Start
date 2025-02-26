

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:String,
    address:String,
    mobile:Number,
    speciality:String,
    email:String,
    password:String

})

module.exports = mongoose.model('doctor',doctorSchema)