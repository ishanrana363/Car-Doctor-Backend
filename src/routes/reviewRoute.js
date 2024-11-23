const express = require("express");
const { createReview, allReviews, singleReview, updateReview, deleteReview } = require("../controllers/reviewController")


function reviewRoute(reviewCollection) {
    const router = express.Router();


    router.post("/review", (req, res) => createReview(req, res, reviewCollection));
    router.get("/review", (req, res) => allReviews(req, res, reviewCollection));
    router.get("/review/:id", (req, res) => singleReview(req, res, reviewCollection));
    router.put("/review/:id", (req, res) => updateReview(req, res, reviewCollection));
    router.delete("/review/:id", (req, res) => deleteReview(req, res, reviewCollection));



    return router;
}

module.exports = reviewRoute;