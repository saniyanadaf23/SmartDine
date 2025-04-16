import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "SmartDine",
    });
    console.log("✅ Connected to MongoDB successfully!"); 
  } catch (err) {
    console.error(`❌ Database Connection Error: ${err.message}`);
    process.exit(1);
  }
};
