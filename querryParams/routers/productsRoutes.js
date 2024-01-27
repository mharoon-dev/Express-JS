import express from "express";
import {
  addProductController,
  deleteProductController,
  getAllProductsController,
  getSingleProductController,
  updateProductController,
} from "../controllers/productsControllers.js";

const productRoute = express.Router();

// get all products api
// get api
// URI ==>>> /api/v1/products
productRoute.get("/", getAllProductsController);

// get single product api
// post api
// URI ==>>> /api/v1/products/productId
productRoute.get("/:productId", getSingleProductController);

// add product api
// post api
// URI ==>>> /api/v1/products/addProduct
productRoute.post("/addProduct", addProductController);

// update product api
// post api
// URI ==>>> /api/v1/products/productId
productRoute.put("/:productId", updateProductController);

// delete product api
// post api
// URI ==>>> /api/v1/products/productId
productRoute.delete("/:productId", deleteProductController);

export default productRoute;
