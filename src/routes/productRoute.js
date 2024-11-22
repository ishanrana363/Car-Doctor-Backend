const express = require("express");
const { createProduct } = require("../controllers/productController")


function productRoute(productCollection) {
    const router = express.Router();


    router.post("/product", (req, res) => createProduct(req, res, productCollection));





    return router;
}

module.exports = productRoute;