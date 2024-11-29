

const createServiceDetails = async (req, res, serviceCollection) => {
    try {
        let reqBody = req.body;
        let banner = await serviceCollection.insertOne(reqBody);
        return res.status(201).json({
            status: "success",
            message: "Service created successfully",
            data: banner
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        })
    }
};

module.exports = {createServiceDetails};