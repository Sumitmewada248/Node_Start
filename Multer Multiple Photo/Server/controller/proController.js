

const model=require("../model/proModel")

const InsertProduct=async(req,res)=>{
    
    const imageurl=req.files.map(file => file.path);
    const {product,brand,price,quantity}=req.body
    const defaultImages=imageurl[0]

    const Product=await model.create({
        product:product,
        brand:brand,
        price:price,
        quantity:quantity,
        defaultImages:defaultImages,
        images:imageurl
    })
    res.send("Product Inserted")
}

const DisplayProduct=async(req,res)=>{
    const  Product=await model.find()
    res.send(Product)
}

module.exports={
    InsertProduct,
    DisplayProduct
}