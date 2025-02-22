

const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const app=express();
const user=require("./route/userRoute");

mongoose.connect("mongodb://127.0.0.1:27017/Relation").then(()=>console.log("Database Connected"));
app.use(cors());

port=8080;
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use("/user",user);

app.listen(port,()=>
    console.log(`Server is running on port ${port}`));