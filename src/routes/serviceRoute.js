const express = require("express");
const { createService, allService, singleService, updateService, deleteServic} = require("../controllers/serviceController")


function serviceRoute(serviceCollection) {
    const router = express.Router();


    router.post("/service", (req, res) => createService(req, res, serviceCollection));
    router.get("/service", (req, res) => allService(req, res, serviceCollection));
    router.get("/service/:id", (req, res) => singleService(req, res, serviceCollection));
    router.put("/service/:id", (req, res) => updateService(req, res, serviceCollection));
    router.delete("/service/:id", (req, res) => deleteServic(req, res, serviceCollection));








    return router;
}

module.exports = serviceRoute;