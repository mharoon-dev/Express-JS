import { ProductSchema } from "../models/products.js";


//  /api/v1/products/addProduct
export const addProduct = (req, res) => {
  const { name, price, rating, category } = req.body;

  if (!name || !price || !rating || !category) {
    res.status(400).json({
      message: "All fields are required",
    });
  } else {
    let newProduct = {
      name,
      price,
      rating,
      category,
    };
    const product = new ProductSchema(newProduct);
    if (product) {
      const save = product.save();
      res.status(200);
      res.json({
        status: true,
        message: "Product added successfully",
        data: save,
      });
    } else {
      res.status(400)
      res.json({
        status: false,
        message: "Product not added",
      })
    }
  }
};

// export const getAllProducts = (req, res) => {
//     const { name , price , rating , category } = req.query
// };
