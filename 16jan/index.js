const http=require("http")
const college=require("./Cybrom")

http.createServer(function(req,res){
    res.write("<h1>This is my first in the program</h1>")
    res.write(college.Mycollege())
    res.write(college.University())
    res.end("<h5>No More</h5>")
}).listen(4040,()=>{
    console.log("server started at port 4040")

})