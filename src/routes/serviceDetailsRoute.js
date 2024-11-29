const express = require("express");
const {createServiceDetails } = require("../controllers/serviceDetailsController");


function servideDetails(serviceDetailsCollection) {
    const router = express.Router();


    router.post("/service-details", (req, res) => createServiceDetails(req, res, serviceDetailsCollection));






    return router;
}

module.exports = servideDetails;