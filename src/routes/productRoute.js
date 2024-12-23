const express = require("express");
const { createProduct, allProducts,singleProduct, updateProduct, deleteProduct } = require("../controllers/productController")


function productRoute(productCollection) {
    const router = express.Router();


    router.post("/product", (req, res) => createProduct(req, res, productCollection));
    router.get("/product", (req, res) => allProducts(req, res, productCollection));
    router.get("/product/:id", (req, res) => singleProduct(req, res, productCollection));
    router.put("/product/:id", (req, res) => updateProduct(req, res, productCollection));
    router.delete("/product/:id", (req, res) => deleteProduct(req, res, productCollection));






    return router;
}

module.exports = productRoute;