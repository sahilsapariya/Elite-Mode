import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Database connected.");
    });

    connection.on("error", (error) => {
      console.log("MongoDB connection error: ", error);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong with the database connection.");
    console.log(error);
  }
}
