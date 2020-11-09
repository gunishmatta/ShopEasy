const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById ,pushOrderinPurchaseList } = require("../controllers/user");
const {createOrder,getOrderById} = require('../controllers/order');
const {updateStock} = require('../controllers/product');
const { chunk } = require("lodash");

//params
router.param("userId",getUserById);
router.param("orderId",getOrderById);

//actual routes
router.post('/order/create/:userId',isSignedIn,isAuthenticated,pushOrderinPurchaseList,updateStock,createOrder);

//read
router.get('/order/all/:userId',isSignedIn,isAuthenticated,isAdmin,getAllOrders);


module.exports = router;