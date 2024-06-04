const express = require("express");
const Product = require("../models/products.model.js");
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");
const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.post("/", createProduct);

//update a product
router.put("/:id", updateProduct);

//delete a product
router.delete("/:id", deleteProduct);

module.exports = router; 