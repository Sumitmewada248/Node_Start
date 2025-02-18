

const express=require('express');
const app=express();
const cors=require("cors")
const middle=require("./middleware/mymiddle")
app.use(cors())



app.get("/myhome",middle ,(req,res)=>{
    console.log("file save ")
    console.log(req.name)
    res.send("home page")
    

})



app.listen(3000,()=>console.log("server is running"))