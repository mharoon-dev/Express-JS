import express from "express";
import { addProduct } from "../controllers/productsControllers.js";
const productRoute = express.Router();

// /api/v1/product/addProduct
productRoute.post("/", addProduct);

export { productRoute };
