// const http=require("http")
// const up=require("uppercase")

// http.createServer((req,res)=>{
//     res.write(up("<h1>This is my first program</h1>"))
//     res.write(up("this is a bad boy"))
//     res.end(up("<h5>No More</h5>"))
// }).listen(4040,()=>{
//     console.log("<h6>server run at 4040</h6>")
// })
// const express=require("express")
// const app=express()

// app.get("/",(req,res)=>{
//     res.send("<h1>This is my first program</h1>")
// }) 

// app.get("/home",(req,res)=>{
//     res.send("this is my home page")
// })

// app.get("/about",(req,res)=>{
//     res.send("this is my about page")
// })

// app.post("/dhan",(req,res)=>{
//     res.send("this is my dhan page")
// })


// app.post("/hello")

// app.listen(4040,()=>{
//     console.log("<h6>server run at 4040</h6>")
// })


const express=require("express")
const app=express()
port=8000


app.get("/student/home",(req,res)=>{
    res.send("<h1>This is student home page</h1>")
})
app.get("/student/about",(req,res)=>{
    res.send("<h1>This is student about page</h1>")
})
app.get("/student/contact",(req,res)=>{
    res.send("<h1>This is student contact page</h1>")
})
app.get("/teacher/home",(req,res)=>{
    res.send("<h1>This is teacher home page</h1>")
})
app.get("/teacher/about",(req,res)=>{
    res.send("<h1>This is teacher about page</h1>")
})
app.get("/teacher/salary",(req,res)=>{
    res.send("<h1>This is teacher salary page</h1>")
})


app.listen(port,()=>{
    console.log(`<h6>server run at ${port}</h6>`)
})