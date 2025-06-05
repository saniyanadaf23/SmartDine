import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb+srv://<your-url>', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log("✅ Connected to MongoDB successfully!"); 
  } catch (err) {
    console.error(`❌ Database Connection Error: ${err.message}`);
    process.exit(1);
  }
};
