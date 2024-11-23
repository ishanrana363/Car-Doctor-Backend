const { ObjectId } = require("mongodb");

const createService = async (req, res, serviceCollection) => {
    try {
        let reqBody = req.body;
        let service = await serviceCollection.insertOne(reqBody);
        return res.status(201).json({
            status: "success",
            message: "Service created successfully",
            data: service
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        })
    }
};

const allService = async (req, res, serviceCollection) => {
    try {
        // Fetch all Teams from the collection
        let service = await serviceCollection.find().toArray();

        // Return successful response with Teams data
        return res.status(200).json({
            status: "success",
            message: "All service fetched successfully",
            data: service
        });
    } catch (error) {
        // Catch any errors and return an error response
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    }
};

const singleService = async (req, res, serviceCollection) => {
    try {
        const serviceId = req.params.id;

        // Validate if the service ID is a valid ObjectId
        if (!ObjectId.isValid(serviceId)) {
            return res.status(400).json({
                status: "error",
                msg: "Invalid service ID"
            });
        }

        // Fetch Team by ID from the collection
        let service = await serviceCollection.findOne({ _id: new ObjectId(serviceId) });

        if (!service) {
            return res.status(404).json({
                status: "error",
                msg: "Service not found"
            });
        }

        // Return Team data on success
        res.status(200).json({
            status: "success",
            message: "Service fetched successfully",
            data: service
        });
    } catch (error) {
        console.error('Error fetching service:', error); // Log the error for debugging purposes
        return res.status(500).json({
            status: "error",
            msg: "Internal server error"
        });
    }
};

const updateService = async (req, res, serviceCollection) => {
    try {
        let reqBody = req.body;
        let serviceId = req.params.id;
        let updateResult = await serviceCollection.updateOne({ _id: new ObjectId(serviceId) }, { $set: reqBody });
        if (updateResult.modifiedCount === 0) {
            return res.status(404).json({
                status: "error",
                msg: "Service not found"
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Service updated successfully"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    } // <-- Closing brace for the catch block
};

const deleteServic = async (req, res, serviceCollection) => {
    try {
        let serviceId = req.params.id;
        let deleteResult = await serviceCollection.deleteOne({ _id: new ObjectId(serviceId) });
        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({
                status: "error",
                msg: "Service not found"
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Service deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    } // <-- Closing brace for the catch block
};



module.exports = {createService ,allService,singleService,updateService,deleteServic};