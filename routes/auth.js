var express = require("express");
const { check } = require('express-validator');
var router = express.Router();
const {signout,signup,isSignedIn} = require('../controllers/auth');

router.post('/signup',[check("name").isLength({min:3}).withMessage('Name must be at least 3 chars long'),

check("email").isEmail().withMessage(""),

check("securePassword").isLength({ min: 5 }).withMessage('must be at least 5 chars long').matches(/\d/).withMessage('must contain a number')

],signup);

router.post('/sigin',
[
check("email").isEmail().withMessage(""),

check("securePassword").isLength({ min: 5 }).withMessage('must be at least 5 chars long').matches(/\d/).withMessage('must contain a number')

],signup);


router.get("/signout",signout);

router.get("/testroute",isSignedIn,
(req,res)=>
{
res.send("A protected Route")
})



module.exports = router;
