const express = require("express");
const {createTeam} = require("../controllers/teamController")


function teamRoute(teamCollection) {
    const router = express.Router();


    router.post("/team", (req, res) => createTeam(req, res, teamCollection));
    // router.get("/product", (req, res) =>(req, res, teamCollection));
    // router.get("/product/:id", (req, res) => (req, res, teamCollection));
    // router.put("/product/:id", (req, res) => (req, res, teamCollection));
    // router.delete("/product/:id", (req, res) => (req, res, teamCollection));






    return router;
}

module.exports = teamRoute;