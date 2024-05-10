const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const vehicleSchema = new Schema({
    plate: {
      type: String,
      required: true
    },
    economicNumber: {
      type: String
    },
    vim: {
      type: String,
      required: true
    },
    seating: {
      type: Number,
      required: true
    },
    carInsurance: {
      type: String,
      required: true
    },
    carInsuranceNumber: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
  }, {
    versionKey: false,
    timestamps: true
  })
  
  const vehicleModel = model('vehicles', vehicleSchema);
  
  module.exports = vehicleModel
