import mongoose from "mongoose";

export let classroomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: [true, "roomNumber required"],
  },
  type: {
    type: String,
    required: [true, "type required"],
  },
  floor: {
    type: String,
    required: [true, "floor required"],
  },
});
