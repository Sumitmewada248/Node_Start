const http=require("http")
const emp=require("./employee")




http.createServer(function(req,res){

    res.write(emp.empeDetail())
    res.write(emp.empSalary())
    res.write(emp.workExperiance())
    res.end("<h5>No More</h5>")
}).listen(4040,()=>{
    console.log("server started at port 4040")

})