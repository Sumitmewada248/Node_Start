const http=require("http")

http.createServer(function(req,res){
    res.write("<h1>This is my first program</h1>")
    res.end("<h5>No More</h5>")
}).listen(4040)