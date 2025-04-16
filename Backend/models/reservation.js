import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [4, "First name must be at least 3 characters."],
    maxLength: [30, "First name cannot exceed 30 characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [4, "Last name must be at least 3 characters."],
    maxLength: [30, "Last name cannot exceed 30 characters."],
  },
  date: { type: String, required: true },
  time: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must be 11 digits."],
    maxLength: [10, "Phone number must be 11 digits."],
  },
  order: {
    type: String,
    required: true,
    minLength: [5, "Order must contain at least 5 characters."],
    maxLength: [35, "Order cannot exceed 30 characters."],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
