const { ObjectId } = require("mongodb");

const createChoose = async (req, res, chooseController) => {
    try {
        let reqBody = req.body;
        let team = await chooseController.insertOne(reqBody);
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

const allChoose = async (req, res, chooseController) => {
    try {
        // Fetch all Teams from the collection
        let Teams = await chooseController.find().toArray();

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

const singleChoose = async (req, res, chooseController) => {
    try {
        const chooseId = req.params.id;

        // Validate if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(chooseId)) {
            return res.status(400).json({
                status: "error",
                msg: "Invalid choose ID"
            });
        }

        // Fetch Team by ID from the collection
        let choose = await chooseController.findOne({ _id: new ObjectId(chooseId) });

        if (!choose) {
            return res.status(404).json({
                status: "error",
                msg: "Choose not found"
            });
        }

        // Return Team data on success
        res.status(200).json({
            status: "success",
            message: "Team fetched successfully",
            data: choose
        });
    } catch (error) {
        console.error('Error fetching choose:', error); // Log the error for debugging purposes
        return res.status(500).json({
            status: "error",
            msg: "Internal server error"
        });
    }
};

const updateChoose = async (req, res, chooseController) => {
    try {
        let reqBody = req.body;
        let chooseId = req.params.id;
        let updateResult = await chooseController.updateOne({ _id: new ObjectId(chooseId) }, { $set: reqBody });
        if (updateResult.modifiedCount === 0) {
            return res.status(404).json({
                status: "error",
                msg: "Choose not found"
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Choose updated successfully"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    } // <-- Closing brace for the catch block
};

const deleteChoose = async (req, res, chooseController) => {
    try {
        let chooseId = req.params.id;
        let deleteResult = await chooseController.deleteOne({ _id: new ObjectId(chooseId) });
        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({
                status: "error",
                msg: "Choose not found"
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Choose deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    } // <-- Closing brace for the catch block
};



module.exports = { createChoose,allChoose,singleChoose,updateChoose,deleteChoose };