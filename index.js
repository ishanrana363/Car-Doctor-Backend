const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectToDatabase } = require("./db");
const productRoute = require("./src/routes/productRoute");
const bannerRoute = require("./src/routes/bannerRoute");



const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

(async () => {
    const db = await connectToDatabase();
    const productCollection = db.collection("products");
    const bannerCollection = db.collection("banners");

    app.use("/api/v1", productRoute(productCollection));
    app.use("/api/v1",  bannerRoute(bannerCollection));

    app.get('/',async (req,res)=>{
        res.send('Welcome to the Product API');
    })

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})();