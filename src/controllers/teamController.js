const { ObjectId } = require("mongodb");

const createTeam = async (req, res, teamCollection) => {
    try {
        let reqBody = req.body;
        let team = await teamCollection.insertOne(reqBody);
        return res.status(201).json({
            status: "success",
            message: "Team created successfully",
            data: team
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        })
    }
};

const allTeams = async (req, res, teamCollection) => {
    try {
        // Fetch all Teams from the collection
        let Teams = await teamCollection.find().toArray();

        // Return successful response with Teams data
        return res.status(200).json({
            status: "success",
            message: "All team members fetched successfully",
            data: Teams
        });
    } catch (error) {
        // Catch any errors and return an error response
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    }
};

// const singleTeam = async (req, res, TeamCollection) => {
//     try {
//         const TeamId = req.params.id;

//         // Validate if the provided ID is a valid ObjectId
//         if (!ObjectId.isValid(TeamId)) {
//             return res.status(400).json({
//                 status: "error",
//                 msg: "Invalid Team ID"
//             });
//         }

//         // Fetch Team by ID from the collection
//         let Team = await TeamCollection.findOne({ _id: new ObjectId(TeamId) });

//         if (!Team) {
//             return res.status(404).json({
//                 status: "error",
//                 msg: "Team not found"
//             });
//         }

//         // Return Team data on success
//         res.status(200).json({
//             status: "success",
//             message: "Team fetched successfully",
//             data: Team
//         });
//     } catch (error) {
//         console.error('Error fetching Team:', error); // Log the error for debugging purposes
//         return res.status(500).json({
//             status: "error",
//             msg: "Internal server error"
//         });
//     }
// };

// const updateTeam = async (req, res, TeamCollection) => {
//     try {
//         let reqBody = req.body;
//         let bannerId = req.params.id;
//         let updateResult = await TeamCollection.updateOne({ _id: new ObjectId(bannerId) }, { $set: reqBody });
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

// const deleteTeam = async (req, res, TeamCollection) => {
//     try {
//         let bannerId = req.params.id;
//         let deleteResult = await TeamCollection.deleteOne({ _id: new ObjectId(bannerId) });
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



module.exports = { createTeam,allTeams };