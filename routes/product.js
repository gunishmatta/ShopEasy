const express = require('express')
const router = express.Router();

const { getProduct, photo } = require('../controllers/product');
const {isAdmin,isAuthenticated,isSignedIn} = require('../controllers/auth')
const {getUserById} = require('../controllers/user')

//all params
router.param("userId",getUserById);
router.param("productId",getProductById);

//all routes

//create routes
router.post('/product/create/:userId',isSignedIn.isAuthenticated,isAdmin,createProduct);


//get route
router.get("/product/:productId",getProduct);
router.get("/product/photo/:productId",photo)


router.put('/product/:productId/:userId',isSignedIn,isAuthenticated,isAdmin,updateProduct);


//delete route
router.delete('/product/:productId/:userId',isSignedIn,isAuthenticated,isAdmin,deleteProduct);


module.exports = router;