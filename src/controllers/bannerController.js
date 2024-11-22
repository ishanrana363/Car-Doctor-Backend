
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


module.exports = { createBanner,allBanners };