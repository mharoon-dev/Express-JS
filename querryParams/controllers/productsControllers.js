import { ProductSchema } from "../models/products.js";

//  /api/v1/products/addProduct
export const addProductController = (req, res) => {
  try {
    const { name, price, rating, brand, postedBy } = req.body;

    if (!name || !price || !rating || !brand || !postedBy) {
      res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    } else {
      let newProduct = {
        name,
        price,
        rating,
        brand,
        postedBy,
      };
      const product = new ProductSchema(newProduct);
      const saveProduct = product.save();

      res.status(200);
      res.json({
        status: true,
        message: "Product added successfully",
        data: saveProduct,
      });
    }
  } catch (error) {
    res.status(400);
    res.json({
      status: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

/// /api/v1/products/
export const getAllProductsController = async (req, res) => {
  const { name, price, rating, brand, postedBy } = req.query;
  let products;
  if (name && price && rating && brand && postedBy) {
    products = await ProductSchema.find({
      name: name,
      price: { $lte: price },
      rating: { $lte: rating },
      brand: brand,
      postedBy: postedBy,
    });
    res.status(200);
    res.json({
      status: true,
      message: `here is the products with \nname: ${name},\nprice: ${price},\nrating: ${rating},\nbrand: ${brand},\nposted by: ${postedBy},`,
      data: products,
    });
  } else if (name && price && rating && brand) {
    products = await ProductSchema.find({
      name: name,
      price: { $lte: price },
      rating: { $lte: rating },
      brand: brand,
    });
    res.status(200);
    res.json({
      status: true,
      message: `here is the products.`,
      data: products,
    });
  } else if (name && price && rating) {
    products = await ProductSchema.find({
      name: name,
      price: { $lte: price },
      rating: { $lte: rating },
    });
    res.status(200);
    res.json({
      status: true,
      message: "here is your products.",
      data: products,
    });
  } else if (name && price) {
    products = await ProductSchema.find({
      name: name,
      price: { $lte: price },
    });
    res.status(200);
    res.json({
      status: true,
      message: "here is your products.",
      data: products,
    });
  } else if (name) {
    products = await ProductSchema.find({ name: name });
    res.status(200);
    res.json({
      status: true,
      message: `here is the ${name}.`,
      data: products,
    });
  } else if (price) {
    products = await ProductSchema.find({ price: { $lte: price } });
    res.status(200);
    res.json({
      status: true,
      message: `here is the products with price less than ${price}.`,
      data: products,
      data: products,
    });
  } else if (rating) {
    products = await ProductSchema.find({ rating: { $lte: rating } });
    res.status(200);
    res.json({
      status: true,
      message: `here is the products with the rating less than ${rating}.`,
      data: products,
    });
  } else if (brand) {
    products = await ProductSchema.find({ brand: brand });
    res.status(200);
    res.json({
      status: true,
      message: `here is the products of ${brand}.`,
      data: products,
    });
  } else if (postedBy) {
    products = await ProductSchema.find({ postedBy: postedBy });
    res.status(200);
    res.json({
      status: true,
      message: `here is the products of ${postedBy}.`,
      data: products,
    });
  } else {
    products = await ProductSchema.find();
    res.status(200);
    res.json({
      status: true,
      message: `here is the all products.`,
      data: products,
    });
  }
};
