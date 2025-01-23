
const Homepage=(req,res)=>{
    res.render("home");
}

const Inserpage=(req,res)=>{
    
    res.render("insert");
}

const Displaypage=(req,res)=>{
    res.render("display");
}

module.exports={Homepage,Inserpage,Displaypage}