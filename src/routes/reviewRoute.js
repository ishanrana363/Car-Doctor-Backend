const express = require("express");
const { createReview, allReviews } = require("../controllers/reviewController")


function reviewRoute(reviewCollection) {
    const router = express.Router();


    router.post("/review", (req, res) => createReview(req, res, reviewCollection));
    router.get("/review", (req, res) => allReviews(req, res, reviewCollection));



    return router;
}

module.exports = reviewRoute;