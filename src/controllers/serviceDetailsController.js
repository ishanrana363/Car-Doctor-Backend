const { ObjectId } = require("mongodb");


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

const serviceById  = async (req, res, serviceCollection) => {
    try {
        let serviceId = req.params.id;
        let service = await serviceCollection.findOne({_id: new ObjectId(serviceId)});
        if (!service) {
            return res.status(404).json({
                status: "error",
                message: "Service not found"
            })
        }
        return res.status(200).json({
            status: "success",
            data: service
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        })
    }
};

module.exports = {createServiceDetails,serviceById};