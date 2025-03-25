

   const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }
});

module.exports = mongoose.model('Product', productSchema);

