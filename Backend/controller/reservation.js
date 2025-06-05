import { Reservation } from "../models/reservation.js";
import ErrorHandler from "../middlewares/error.js";

export const send_reservation = async (req, res, next) => {
  try {
    const { firstName, lastName, email, date, time, phone, order } = req.body;

    if (!firstName || !lastName || !email || !date || !time || !phone || !order) {
      return next(new ErrorHandler("❌ Please fill the full reservation form!", 400));
    }

    await Reservation.create({ firstName, lastName, email, date, time, phone, order });

    res.status(201).json({
      success: true,
      message: "✅ Reservation sent successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    next(error);
  }
};

export const get_reservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find().sort({ date: -1 });
    res.status(200).json({ success: true, reservations });
  } catch (error) {
    next(error);
  }
};

export const update_reservation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const reservation = await Reservation.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!reservation) {
      return next(new ErrorHandler("❌ Reservation not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "✅ Reservation updated successfully",
      reservation,
    });
  } catch (error) {
    next(error);
  }
};

export const delete_reservation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findByIdAndDelete(id);

    if (!reservation) {
      return next(new ErrorHandler("❌ Reservation not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "🗑️ Reservation deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};