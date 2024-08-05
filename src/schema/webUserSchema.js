import mongoose from "mongoose";

let webUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "firstName is requied"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  role: {
    type: String,
    required: [true, "role is required"],
  },
  isVerifiedEmail: {
    type: String,
    required: [true, "isVerifiedEmail is required"],
  },
});

export default webUserSchema;
