const express = require("express");
const { createBanner } = require("../controllers/bannerController")


function bannerRoute(bannerCollection) {
    const router = express.Router();

    router.post("/banner", (req, res) => createBanner(req, res, bannerCollection));





    return router;
}

module.exports = bannerRoute;