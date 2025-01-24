const express=require('express');
const app=express();
const bodyparser=require("body-parser");
const stuRoute=require("./Route/stuRoute")
const mongoose=require("mongoose");

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.set('view engine','ejs');

mongoose.connect("mongodb://127.0.0.1:27017/sturecode")

app.use("/student",stuRoute)




app.listen(8900,()=>console.log("server is running on port 8900"));