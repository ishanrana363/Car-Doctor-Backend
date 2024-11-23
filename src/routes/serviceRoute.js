const express = require("express");
const { createService, allService} = require("../controllers/serviceController")


function serviceRoute(serviceCollection) {
    const router = express.Router();


    router.post("/service", (req, res) => createService(req, res, serviceCollection));
    router.get("/service", (req, res) => allService(req, res, serviceCollection));

    // router.get("/team", (req, res) => allTeams(req, res, teamCollection));
    // router.get("/team/:id", (req, res) => singleTeam(req, res, teamCollection));
    // router.put("/team/:id", (req, res) => updateTeam(req, res, teamCollection));
    // router.delete("/team/:id", (req, res) => deleteTeam(req, res, teamCollection));






    return router;
}

module.exports = serviceRoute;