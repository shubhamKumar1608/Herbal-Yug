import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("✅ MongoDB Connected");
  });

  const uri = `${process.env.MONGO_URI}/e-commerce`;

  // console.log("⛳ Connecting to:", uri);

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
