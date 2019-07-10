const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
const connection =  mongoose.connection;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  category: String,
  img1_url: String
});

const Products = mongoose.model('product', ProductSchema);

// Products.find({ category: 'test_category' }).then(console.log);

module.exports = Products;