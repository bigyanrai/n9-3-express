import mongoose from "mongoose";

export let collegeSchema = new mongoose.Schema({
  collegeName: {
    type: String,
    required: [true, "collegeName required"],
  },
  collegeAddress: {
    type: String,
    required: [true, "collegeAddress required"],
  },
  collegeCapacity: {
    type: Number,
    required: [true, "collegeAddress required"],
  },
});
