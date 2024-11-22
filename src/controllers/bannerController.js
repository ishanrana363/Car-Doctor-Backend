
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


module.exports = { createBanner };