const express=require('express');
const app=express();
const stuRoute=require("./Route/stuRoute")
app.set('view engine','ejs');
app.use("/student",stuRoute)


app.listen(8900,()=>console.log("server is running on port 8900"));