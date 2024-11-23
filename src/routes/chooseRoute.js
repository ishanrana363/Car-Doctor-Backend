const express = require("express");
const { createChoose, allChoose, singleChoose, updateChoose, deleteChoose } = require("../controllers/chooseController");


function chooseRoute(chooseCollection) {
    const router = express.Router();


    router.post("/choose", (req, res) => createChoose(req, res, chooseCollection));
    router.get("/choose", (req, res) => allChoose(req, res, chooseCollection));
    router.get("/choose/:id", (req, res) => singleChoose(req, res, chooseCollection));
    router.put("/choose/:id", (req, res) => updateChoose(req, res, chooseCollection));
    router.delete("/choose/:id", (req, res) => deleteChoose(req, res, chooseCollection));






    return router;
}

module.exports = chooseRoute;