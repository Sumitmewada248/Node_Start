const express=require("express")
 const app=express()
const stuRoute=require("./routes/stuRoute")

app.set("view engine","ejs")
app.use("/students",stuRoute)    

 app.listen(4000,()=>{
    console.log("server started")
 })