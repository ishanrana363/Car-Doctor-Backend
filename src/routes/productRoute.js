const express = require("express");
const { createProduct, allProducts } = require("../controllers/productController")


function productRoute(productCollection) {
    const router = express.Router();


    router.post("/product", (req, res) => createProduct(req, res, productCollection));
    router.get("/product", (req, res) => allProducts(req, res, productCollection));





    return router;
}

module.exports = productRoute;