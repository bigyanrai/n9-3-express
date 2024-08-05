import mongoose from "mongoose";

export let teacherSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: [true, "teacherName required"],
  },
  teacherSubject: {
    type: String,
    required: [true, "teacherSubject required"],
  },
  experience: {
    type: Number,
    required: [true, "experience required"],
  },
});
