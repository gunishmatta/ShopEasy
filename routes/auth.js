var express = require("express");
var router = express.Router();
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");
const Joi = require('@hapi/joi');
const validate = require('express-joi-validate');

const userValidationSchema = 
{
  params:
  {
    name: Joi.string().alphanum().min(3).max(20).required,
    password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  
  }
}

router.post(
  "/signup", validate(userValidationSchema),
  signup
);

router.post(
  "/signin",
  signin
);

router.get("/signout", signout);

module.exports = router;