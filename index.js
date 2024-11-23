const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectToDatabase } = require("./db");
const productRoute = require("./src/routes/productRoute");
const bannerRoute = require("./src/routes/bannerRoute");
const teamRoute = require("./src/routes/teamRoute");
const reviewRoute = require("./src/routes/reviewRoute");




const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

(async () => {
    const db = await connectToDatabase();
    const productCollection = db.collection("products");
    const bannerCollection = db.collection("banners");
    const teamCollection = db.collection("teams");
    const reviewCollection = db.collection("reviews");

    app.use("/api/v1", productRoute(productCollection));
    app.use("/api/v1",  bannerRoute(bannerCollection));
    app.use("/api/v1",  teamRoute(teamCollection));
    app.use("/api/v1",  reviewRoute(reviewCollection));

    app.get('/',async (req,res)=>{
        res.send('Welcome to the Product API');
    })

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})();