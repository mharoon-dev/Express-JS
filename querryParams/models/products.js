import mongoose from "mongoose";

const ProductSchemaCheck = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },

    // { timestamps: true }
});


export const ProductSchema = mongoose.model("Product", ProductSchemaCheck) 