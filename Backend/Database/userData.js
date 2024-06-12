const express = require('express');
const mongoose = require('mongoose');
const userDataSchema = new mongoose.Schema({
    Email: String,
    Name : String,
    Data : String
})
module.exports = mongoose.model('user-data',userDataSchema);