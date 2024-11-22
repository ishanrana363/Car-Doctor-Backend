
const createProduct =  async (req,res,productCollection)=>{
    try {
        let reqBody = req.body;
        let product = await productCollection.insertOne(reqBody);
        return res.status(201).json({
            status:"success",
            message: "Product created successfully",
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            status:"error",
            msg : error.message
        })
    }
};


module.exports = {createProduct};