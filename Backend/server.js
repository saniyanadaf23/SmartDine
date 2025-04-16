import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js"; 
import reservationRoutes from "./routes/reservationRoute.js";
import { errorMiddleware } from "./middlewares/error.js";

dotenv.config();
const app = express();

dbConnection();

app.use(cors());
app.use(express.json());

app.use("/api/reservations", reservationRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
