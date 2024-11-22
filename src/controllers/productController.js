const { ObjectId } = require("mongodb");

const createProduct = async (req, res, productCollection) => {
    try {
        let reqBody = req.body;
        let product = await productCollection.insertOne(reqBody);
        return res.status(201).json({
            status: "success",
            message: "Product created successfully",
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        })
    }
};

const allProducts = async (req, res, productCollection) => {
    try {
        // Fetch all products from the collection
        let products = await productCollection.find().toArray();

        // Return successful response with products data
        return res.status(200).json({
            status: "success",
            message: "All products fetched successfully",
            data: products
        });
    } catch (error) {
        // Catch any errors and return an error response
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    }
};

const singleProduct = async (req, res, productCollection) => {
    try {
        const productId = req.params.id;

        // Validate if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(productId)) {
            return res.status(400).json({
                status: "error",
                msg: "Invalid product ID"
            });
        }

        // Fetch product by ID from the collection
        let product = await productCollection.findOne({ _id: new ObjectId(productId) });

        if (!product) {
            return res.status(404).json({
                status: "error",
                msg: "Product not found"
            });
        }

        // Return product data on success
        res.status(200).json({
            status: "success",
            message: "Product fetched successfully",
            data: product
        });
    } catch (error) {
        console.error('Error fetching product:', error); // Log the error for debugging purposes
        return res.status(500).json({
            status: "error",
            msg: "Internal server error"
        });
    }
};

const updateProduct = async (req, res, productCollection) => {
    try {
        let reqBody = req.body;
        let bannerId = req.params.id;
        let updateResult = await productCollection.updateOne({ _id: new ObjectId(bannerId) }, { $set: reqBody });
        if (updateResult.modifiedCount === 0) {
            return res.status(404).json({
                status: "error",
                msg: "Product not found"
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Product updated successfully"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    } // <-- Closing brace for the catch block
};

const deleteProduct = async (req, res, productCollection) => {
    try {
        let bannerId = req.params.id;
        let deleteResult = await productCollection.deleteOne({ _id: new ObjectId(bannerId) });
        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({
                status: "error",
                msg: "Product not found"
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Product deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    } // <-- Closing brace for the catch block
};



module.exports = { createProduct, allProducts, singleProduct,updateProduct,deleteProduct };