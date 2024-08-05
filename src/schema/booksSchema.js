import mongoose from "mongoose";

export let booksSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: [true, "bookName required"],
  },
  price: {
    type: String,
    required: [true, "price required"],
  },
  quantity: {
    type: Number,
    required: [true, "required quantity"],
  },
});
