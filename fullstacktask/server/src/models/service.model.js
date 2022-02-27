import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "Customer",
  },
  program: {
    type: mongoose.Types.ObjectId,
    ref: "Program",
  },
  discount: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Service", ServiceSchema);
