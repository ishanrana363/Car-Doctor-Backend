const { ObjectId } = require("mongodb");

const createBanner = async (req, res, bannerCollection) => {
    try {
        let reqBody = req.body;
        let banner = await bannerCollection.insertOne(reqBody);
        return res.status(201).json({
            status: "success",
            message: "Banner created successfully",
            data: banner
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        })
    }
};

const allBanners = async (req, res, bannerCollection) => {
    try {
        let banners = await bannerCollection.find().toArray();
        return res.status(200).json({
            status: "success",
            data: banners
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        })
    }
};

const updateBanner = async (req, res, bannerCollection) => {
    try {
        let reqBody = req.body;
        let bannerId = req.params.id;
        let updateResult = await bannerCollection.updateOne({ _id: new ObjectId(bannerId) }, { $set: reqBody });
        if (updateResult.modifiedCount === 0) {
            return res.status(404).json({
                status: "error",
                msg: "Banner not found"
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Banner updated successfully"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    } // <-- Closing brace for the catch block
};

const deleteBanner = async (req, res, bannerCollection) => {
    try {
        let bannerId = req.params.id;
        let deleteResult = await bannerCollection.deleteOne({ _id: new ObjectId(bannerId) });
        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({
                status: "error",
                msg: "Banner not found"
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Banner deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        });
    } // <-- Closing brace for the catch block
};



module.exports = { createBanner, allBanners ,updateBanner,deleteBanner}