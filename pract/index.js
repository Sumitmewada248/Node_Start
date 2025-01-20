
const express=require("express")
const app=express()

const emp=require("./routes/emplloyeRoute")
const pro=require("./routes/productRoute")

app.use("/emplloyee",emp)
app.use("/product",pro)

app.listen(4000,()=>{
    console.log("server started")
})


