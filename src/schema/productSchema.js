import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
  productName: {
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
});

export default productSchema;
