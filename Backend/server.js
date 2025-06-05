import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import reservationRoutes from './routes/reservationRoute.js'; // Reservation routes
import otpRoutes from './routes/otpRoutes.js'; // ✅ Import the OTP routes

dotenv.config(); // Load environment variables

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors({
  origin: 'http://localhost:5173', // Adjust if your frontend is hosted elsewhere
  credentials: true,
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected!");
})
.catch((err) => {
  console.error("❌ MongoDB connection failed:", err);
});

// Mount API routes
app.use("/api/reservations", reservationRoutes);
app.use("/api", otpRoutes); // ✅ Mount the OTP routes under /api

// Default test route
app.get("/", (req, res) => {
  res.send("Hello, the API is live!");
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Something went wrong!",
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
