const express = require("express");
// const {
//     createUser,
//     loginUser,
//     userProfile, 
//     updateUserProfile,
//     allUsers,
//     deleteUser
    
// } = require("../controllers/userController");


function productRoute(productCollection) {
    const router = express.Router();


    // router.post("/product", (req, res) => createUser(req, res, productCollection));

    // router.get("/all-user", (req, res) => allUsers(req, res, productCollection));

    // router.delete("/delete-user/:id", (req, res) => deleteUser(req, res, productCollection));



    return router;
}

module.exports = productRoute;