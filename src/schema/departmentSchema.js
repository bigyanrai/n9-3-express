import mongoose from "mongoose";

export let departmentSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: [true, "departmentName required"],
  },
  departmentID: {
    type: String,
    required: [true, "departmentID required"],
  },
  departmentHead: {
    type: String,
    required: [true, "departmentHead required"],
  },
});
