const home=(req,res)=>{
res.render("home")
}

const about=(req,res)=>{
    res.render("about")
}

const courses=(req,res)=>{
    res.render("courses")
}

const fees=(req,res)=>{
    res.render("fees")
}

module.exports={
    home,
    about,
    courses,
    fees
}