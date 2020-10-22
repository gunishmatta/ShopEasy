const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { validationResult } = require('express-validator');

const User = require('../models/user')

exports.signup = (req, res) =>  {
 
  const errors = validationResult(req)
 if(!errors.isEmpty())
 {
   return res.status(422).json(
     {
       error: errors.array()[0].msg
     }
   )
 }
 
 
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "Not able to save user in Database "
      })
    }

    res.json({
     name: user.name,
     email: user.email,
      id: user._id});
  });

}

exports.signin = (req,res) =>
{
 const {email,password} = req.body; //destructuring
 const errors = validationResult(req)
 if(!errors.isEmpty())
 {
   return res.status(422).json(
     {
       error: errors.array()[0].msg
     }
   )
 
}

User.findOne({email},(err,user)=>{
if(err ||(!user))
{
return res.status(400).json({
  error : "User does not exists"
});
}
if(!user.authenticate(password))
{
return res.status(400).json({
  error : "Email or password does not match"
})
}
//created token
const token = jwt.sign({_id: user._id},"abcd")

//putting token to cookie
res.cookie("token",token,{expire: new Date()+100})

//return response to frontend
const {_id,name,email,role} = user;
return res.json({
  token,
  user : {_id,name,email,role}
})

})
}


exports.signout = (req, res) => {
  res.clearCookie("token");
    res.json({ message: "User signed out" });
  }
  
