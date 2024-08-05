import mongoose from "mongoose";

export let studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: [true, "studenttName required"],
  },
  studentAddress: {
    type: String,
    required: [true, "studentID required"],
  },
  isMarried: {
    type: Boolean,
    required: [true, "isMarried required"],
  },
});
