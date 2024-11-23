const express = require("express");
const { createReview } = require("../controllers/reviewController")


function reviewRoute(reviewCollection) {
    const router = express.Router();


    router.post("/review", (req, res) => createReview(req, res, reviewCollection));



    return router;
}

module.exports = reviewRoute;