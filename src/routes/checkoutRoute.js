const express = require("express");
const { createCheckout } = require("../controllers/checkoutController");


function checkoutRoute(checkoutCollection) {
    const router = express.Router();


    router.post("/checkout", (req, res) => createCheckout(req, res, checkoutCollection));

    // router.get("/choose", (req, res) => allChoose(req, res, chooseCollection));
    // router.get("/choose/:id", (req, res) => singleChoose(req, res, chooseCollection));
    // router.put("/choose/:id", (req, res) => updateChoose(req, res, chooseCollection));
    // router.delete("/choose/:id", (req, res) => deleteChoose(req, res, chooseCollection));






    return router;
}

module.exports = checkoutRoute;