const express = require("express");
const { getProducts, addProduct } = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);     // GET /products
router.post("/", addProduct);     // POST /products

module.exports = router;
