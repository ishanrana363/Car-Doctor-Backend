
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

module.exports = { createProduct,allProducts };