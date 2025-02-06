const stuModel = require("../models/stuModels");
const datasave = async (req, res) => {
    const { rollno, name, city, fees } = req.body;
    const data=await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send(data);
}

const getdata = async (req, res) => {
    const data=await stuModel.find()
    res.send(data);
}

const dataSearch = async (req, res) => {
    const { roll } = req.body;
    const data=await stuModel.find({rollno:roll})
    res.send(data);
}

const deleteData = async (req, res) => {
    const { id} = req.body;
    await stuModel.findByIdAndDelete(id)
    res.send("Data Deleted Successfully");
}


module.exports = {
    datasave,
    getdata,
    dataSearch,
    deleteData

}
