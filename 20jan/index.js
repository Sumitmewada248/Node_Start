const express=require("express")
 const app=express()
const stuRoute=require("./routes/studentRoute")
const techRoute=require("./routes/teacherRoute")

app.use("/student",stuRoute)    
app.use("/teacher",techRoute)    

 app.listen(4000,()=>{
    console.log("server started")
 })