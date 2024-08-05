import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect("mongodb://localhost:27017/n9-3-express");
  console.log("Connected to MongoDB");
};

export default connectDB;
