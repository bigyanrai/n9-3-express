import mongoose from "mongoose";

export let bikeSchema = new mongoose.Schema({
  Model: {
    type: String,
    required: [true, "Model required"],
  },
  Manufacturer: {
    type: String,
    required: [true, "manufacturer required"],
  },
  color: {
    type: String,
    required: [true, "color  required"],
  },
  type: {
    type: String,
    required: [true, "type required"],
  },
});
