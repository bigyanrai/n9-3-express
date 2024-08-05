import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "fullname field is required"],
  },
  address: {
    type: String,
    required: [true, "address field is required"],
  },
  isMarried: {
    type: Boolean,
    required: [true, "isMarried field is required"],
  },
});

export default userSchema;
