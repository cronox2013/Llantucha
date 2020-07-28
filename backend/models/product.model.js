const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: Number, required: true },
  precio: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;