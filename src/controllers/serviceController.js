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

// const updateTeam = async (req, res, teamCollection) => {
//     try {
//         let reqBody = req.body;
//         let bannerId = req.params.id;
//         let updateResult = await teamCollection.updateOne({ _id: new ObjectId(bannerId) }, { $set: reqBody });
//         if (updateResult.modifiedCount === 0) {
//             return res.status(404).json({
//                 status: "error",
//                 msg: "Team not found"
//             });
//         }
//         return res.status(200).json({
//             status: "success",
//             message: "Team updated successfully"
//         });
//     } catch (error) {
//         return res.status(500).json({
//             status: "error",
//             msg: error.message
//         });
//     } // <-- Closing brace for the catch block
// };

// const deleteTeam = async (req, res, teamCollection) => {
//     try {
//         let bannerId = req.params.id;
//         let deleteResult = await teamCollection.deleteOne({ _id: new ObjectId(bannerId) });
//         if (deleteResult.deletedCount === 0) {
//             return res.status(404).json({
//                 status: "error",
//                 msg: "Team not found"
//             });
//         }
//         return res.status(200).json({
//             status: "success",
//             message: "Team deleted successfully"
//         });
//     } catch (error) {
//         return res.status(500).json({
//             status: "error",
//             msg: error.message
//         });
//     } // <-- Closing brace for the catch block
// };



module.exports = {createService ,allService,singleService};