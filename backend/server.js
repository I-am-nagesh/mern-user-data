import express from "express";
import connectDB from "./config/db.js";
import "dotenv/config";
import userRoutes from "./routes/user.route.js";

const app = express();
connectDB();

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(5000, () => {
  console.log("Server started!");
});
