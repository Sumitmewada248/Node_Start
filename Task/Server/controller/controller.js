
const  categorymodel= require('../model/Category');
const sub = require('../model/sub');
const product = require('../model/product');
const { get } = require('mongoose');



const Category = async (req, res) => {
  const{category}=req.body;
  const Category = await categorymodel.create({category});
  res.status(200).json({Category});

}
const SubCategory = async (req, res) => {
  
  
  const {subcategory,category} = req.body;
  const Subcategory = await sub.create({
    subcategory:subcategory,
    category:category
    });
  res.status(201).json({Subcategory});
}

const getCategories = async (req, res) => {
  try {
    const categories = await categorymodel.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const getSubCategories = async (req, res) => {
  try {
    const subcategories = await sub.find();
    res.status(200).json(subcategories);
  } catch (error) { 
    res.status(404).json({ message: error.message });
  }

}

const insert = async (req, res) => {
    
 
  try {
    const { category, subcategory, product } = req.body;
    const newProduct = await product.create({ category, subcategory, product });
    res.status(201).json({ newProduct });
    }
    catch (error) {
    res.status(409).json({ message: error.message });
    }
}




module.exports=

 { Category ,
    SubCategory,
    getCategories,
    getSubCategories,
    insert
    

 };