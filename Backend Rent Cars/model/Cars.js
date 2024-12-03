// models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  email: {type: String,required: true},
  carname: { type: String, required: true },
  fuel: { type: String, required: true },
  transmission: { type: String, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
