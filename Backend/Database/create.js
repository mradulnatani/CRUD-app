require('./config.js');
const express = require('express');
const userData = require('./userData.js');
const mongoose = require('mongoose');
const app = express();
app.use(express.json);
app.post('./create',async(req,res)=>{
    console.log(req.body);
    const data = new userData(req.body);
    const result = await data.save();
    console.log(result);
})
app.listen(2000);