const stuModel=require("../model/stuModel")
const Homepage=(req,res)=>{
    res.render("home");
}

const Insertpage=(req,res)=>{
    
    res.render("insert");
}

const Displaypage=(req,res)=>{
    res.render("display");
}


const stusave=async(req,res)=>{
    const{rollno,name,city,fees}=req.body;
    const data=await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
  
    res.render('insert');
  }
  

module.exports={Homepage,Insertpage,Displaypage,stusave}