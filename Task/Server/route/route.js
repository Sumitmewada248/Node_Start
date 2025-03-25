const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.post('/category', controller.Category);
router.post('/subcategory', controller.SubCategory);
router.get('/categories', controller.getCategories);
router.get('/subcategories', controller.getSubCategories);
router.post('/done', controller.insert);





module.exports = router;


