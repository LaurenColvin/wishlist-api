const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  category: String,
  title: String,
  brand: String,
  price: Number,
  size: String,
  color: String,
  link: String,
  imgUrl: String,
});

module.exports = mongoose.model("Item", itemSchema);
