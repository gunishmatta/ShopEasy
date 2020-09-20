const express = require('express');
require('dotenv').config()
const app = express();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
console.clear();
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(()=>
    console.log("connected sucessful")
).catch((err)=>console.log(err))


const port = process.env.PORT||8000;

app.listen(port,()=>
{
    console.log("app is running at "+port);
})


mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});