const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  village: String,
  postOffice: String,
  policeStation: String,
  district: String,
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  cart: Object,
  total_price: Number,
  total_item: Number,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
