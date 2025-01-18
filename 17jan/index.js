// const { error } = require("console")
 const fs=require("fs")
// const http=require("http")


// http.createServer((req,res)=>{
//     fs.readFile("raja.txt",(err,data)=>{
//         if(err) throw err;
//         res.write(data)
//         res.end()
//     })
   
// }).listen(4000)

// fs.appendFile("dil.txt","kcxjfgknevjmnhedc",(err)=>{
 
//     if(err) throw err;
//     console.log ("file created")

// })


// fs.open("diljeet.js","w",(err)=>{
//     if (err) throw err;
//     console.log("file are enjoyable")
// })

fs.writeFile("dil.txt","kcxjfgknevjmnhedc",(err)=>{
    if(err) throw err;
    console.log("file created")
})

