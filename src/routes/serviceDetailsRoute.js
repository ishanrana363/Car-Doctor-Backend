const express = require("express");
const {createServiceDetails, serviceById, serviceList } = require("../controllers/serviceDetailsController");


function servideDetails(serviceDetailsCollection) {
    const router = express.Router();


    router.post("/service-details", (req, res) => createServiceDetails(req, res, serviceDetailsCollection));
    router.get("/service-by-id/:id", (req, res) => serviceById(req, res, serviceDetailsCollection));
    router.get("/all-service", (req, res) => serviceList(req, res, serviceDetailsCollection));






    return router;
}

module.exports = servideDetails;