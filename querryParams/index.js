import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./utils/config.js";
import productRoute from "./routers/productsRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

dbConnection();

app.use("/api/v1/products", productRoute);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
