const express = require("express");
const { createBanner,allBanners } = require("../controllers/bannerController")


function bannerRoute(bannerCollection) {
    const router = express.Router();

    router.post("/banner", (req, res) => createBanner(req, res, bannerCollection));
    router.get("/banner", (req, res) => allBanners(req, res,bannerCollection));





    return router;
}

module.exports = bannerRoute;