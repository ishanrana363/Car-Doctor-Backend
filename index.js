const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectToDatabase } = require("./db");
const productRoute = require("./src/routes/productRoute");



const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

(async () => {
    const db = await connectToDatabase();
    const productCollection = db.collection("products")

    app.use("/api/v1", productRoute(productCollection));

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})();