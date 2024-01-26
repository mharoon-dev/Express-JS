import express from "express";
import { addProductController, getAllProductsController } from "../controllers/productsControllers.js";

const productRoute = express.Router();



// get all products api
// get api
// URI ==>>> /api/v1/products
productRoute.get("/", getAllProductsController);


// add product api
// post api
// URI ==>>> /api/v1/products/addProduct
productRoute.post("/addProduct", addProductController);




export default productRoute 
