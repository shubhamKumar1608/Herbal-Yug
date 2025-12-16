import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    const uri = `${process.env.MONGO_URI}/e-commerce`;

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB Connected");
    });

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection successful");
  } catch (err) {
    console.error("MongoDB connection error:", err && err.message ? err.message : err);
    throw err;
  }
};

export default connectDB;
