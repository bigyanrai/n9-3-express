import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "productName required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity required"],
  },
  price: {
    type: Number,
    required: [true, "Price required"],
  },
  feature: {
    type: Boolean,
    required: [true, "Feature field is required"],
  },
  productImage: {
    type: String,
    required: [true, "productImage is required"],
  },
  manufactureDate: {
    type: Date,
    required: [true, "Manufacture date is required"],
  },
  company: {
    type: String,
    required: [true, "Company is required"],
  },
});

export default productSchema;
