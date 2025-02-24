

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:String,
    address:String,

    mobile:String,
})

module.exports = mongoose.model('doctor',doctorSchema)