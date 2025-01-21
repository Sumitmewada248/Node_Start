const express=require("express")
const app=express()
const stuRoute=require("./routes/stuRoute")

app.use("/students",stuRoute)
app.set("view engine","ejs")
app.listen(4000,()=>{
console.log("server start")


}
)