import mongoose from "mongoose";

export let bikeSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, "Model required"],
  },
  manufacturer: {
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
