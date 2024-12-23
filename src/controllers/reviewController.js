const { ObjectId } = require("mongodb");

const createReview = async (req, res, reviewCollection) => {
    try {
        let reqBody = req.body;
        let product = await reviewCollection.insertOne(reqBody);
        return res.status(201).json({
            status: "success",
            message: "Review created successfully",
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        })
    }
};

const allReviews = async (req, res, reviewCollection) => {
    try {
        // Fetch all products from the collection
        let review = await reviewCollection.find().toArray();

        // Return successful response with products data
        return res.status(200).json({
            status: "success",
            message: "All review fetched successfully",
            data: review
        });
    } catch (error) {
        // Catch any errors and return an error response
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    }
};

const singleReview = async (req, res, reviewCollection) => {
    try {
        const reviewId = req.params.id;

        // Validate if the review ID is a valid ObjectId
        if (!ObjectId.isValid(reviewId)) {
            return res.status(400).json({
                status: "error",
                msg: "Invalid review ID"
            });
        }

        // Fetch product by ID from the collection
        let review = await reviewCollection.findOne({ _id: new ObjectId(reviewId) });

        if (!review) {
            return res.status(404).json({
                status: "error",
                msg: "Review not found"
            });
        }

        // Return product data on success
        res.status(200).json({
            status: "success",
            message: "Review fetched successfully",
            data: review
        });
    } catch (error) {
        console.error('Error fetching review:', error); // Log the error for debugging purposes
        return res.status(500).json({
            status: "error",
            msg: "Internal server error"
        });
    }
};

const updateReview = async (req, res, reviewCollection) => {
    try {
        let reqBody = req.body;
        let reviewId = req.params.id;
        let updateResult = await reviewCollection.updateOne({ _id: new ObjectId(reviewId) }, { $set: reqBody });
        if (updateResult.modifiedCount === 0) {
            return res.status(404).json({
                status: "error",
                msg: "Review not found"
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Review updated successfully"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    } // <-- Closing brace for the catch block
};

const deleteReview = async (req, res, reviewCollection) => {
    try {
        let reviewId = req.params.id;
        let deleteResult = await reviewCollection.deleteOne({ _id: new ObjectId(reviewId) });
        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({
                status: "error",
                msg: "Review not found"
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Review deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    } // <-- Closing brace for the catch block
};



module.exports = { createReview,allReviews,singleReview,updateReview,deleteReview };