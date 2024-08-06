import mongoose from "mongoose";

export let traineeSchema = new mongoose.Schema({
  traineeName: {
    type: String,
    required: [true, "traineeName required"],
  },
  traineeAddress: {
    type: String,
    required: [true, "traineeAddress required"],
  },
  department: {
    type: String,
    required: [true, "deapartment required"],
  },
});
