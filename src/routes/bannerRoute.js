const express = require("express");
const { createBanner,allBanners,updateBanner, deleteBanner, singleBanners } = require("../controllers/bannerController")


function bannerRoute(bannerCollection) {
    const router = express.Router();

    router.post("/banner", (req, res) => createBanner(req, res, bannerCollection));
    router.get("/banner", (req, res) => allBanners(req, res,bannerCollection));
    router.get("/banner/:id", (req, res) => singleBanners(req, res,bannerCollection));
    router.put("/banner/:id", (req, res) => updateBanner(req, res,bannerCollection));
    router.delete("/banner/:id", (req, res) => deleteBanner(req, res,bannerCollection));
    
    



    return router;
}

module.exports = bannerRoute;