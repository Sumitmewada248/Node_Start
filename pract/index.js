

const name=require("http")
const data=require("./employee")


name.createServer(function(req,res){
res.write(data.Name())
res.write(data.Age())
res.write(data.Password( ))
res.end("<h5>The End</h5>")


}).listen(4000,()=>{
    console.log("server run on 4000")
})