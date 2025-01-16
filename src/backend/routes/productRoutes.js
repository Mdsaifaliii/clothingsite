const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Fetch All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

// Add a Product
router.post("/", async (req, res) => {
  const { name, price, description, image, category } = req.body;
  try {
    const newProduct = new Product({ name, price, description, image, category });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error adding product" });
  }
});

module.exports = router;
