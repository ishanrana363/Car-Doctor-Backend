const { ObjectId } = require("mongodb");


const createCheckout = async (req, res, checkoutCollection) => {
    try {
        let { service_name,service_price,first_name,last_name,phone,email,message }= req.body;
        const reqBody = {
            service_name,
            service_price,
            first_name,
            last_name,
            phone,
            email,
            message,
            status : "pending",
        }
        let checkout = await checkoutCollection.insertOne(reqBody);
        return res.status(201).json({
            status: "success",
            message: "Checkout created successfully",
            data: checkout
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            msg: error.message
        })
    }
};

// const serviceById  = async (req, res, serviceCollection) => {
//     try {
//         let serviceId = req.params.id;
//         let service = await serviceCollection.findOne({_id: new ObjectId(serviceId)});
//         if (!service) {
//             return res.status(404).json({
//                 status: "error",
//                 message: "Service not found"
//             })
//         }
//         return res.status(200).json({
//             status: "success",
//             data: service
//         })
//     } catch (error) {
//         return res.status(500).json({
//             status: "error",
//             msg: error.message
//         })
//     }
// };

// const serviceList = async (req, res,serviceCollection) =>{
//     try {
//         let services = await serviceCollection.find().toArray();
//         return res.status(200).json({
//             status: "success",
//             data: services
//         })
//     } catch (error) {
//         return res.status(500).json({
//             status: "error",
//             msg: error.message
//         })
//     }
// } 

module.exports = {createCheckout};