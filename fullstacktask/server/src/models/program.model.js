import mongoose from "mongoose";

const ProgramSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Washing Program Name is required",
    trim: true,
  },
  steps: {
    type: Array,
    required: "Washing Program Steps is required",
    trim: true,
  },
  price: {
    type: Number,
    required: "Washing Program Price is required",
    trim: true,
  },
});

export default mongoose.model("Program", ProgramSchema);
