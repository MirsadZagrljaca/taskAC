import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Customers Name is required",
    trim: true,
  },
  email: {
    type: String,
    unique: "Email has taken - please enter another email",
    match: [/.+\@.+/, "Please fill a valid email address"],
    required: "Email is required",
  },
  phone: {
    type: String,
    unique: "Phone number is taken - please enter another phone number",
    match: [/[0-9]{3}-[0-9]{3}-[0-9]{3}/, "Please fill a valid phone number"],
    required: "Email is required",
  },
  numberOfServices: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Customer", CustomerSchema);
