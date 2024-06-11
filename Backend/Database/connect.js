const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const path = require('path');
const database = 'CRUD-appdb';
const url = 'mongodb://localhost:27017/CRUD-appdb';
//const client = new MongoClient(url);

 async function dbConnection(){
    await mongoose.connect(url);
   // const result = await client.connect();
    const setSchema = new mongoose.Schema({
        Email : String,
        Name : String,
        Data : String
    })
    const setModel = mongoose.model('user-data',setSchema);
    let result = setModel.save();
    //return db.collection('user-data');
    
}
dbConnection().then((resp)=>{
    console.log(resp);
    console.log("Connection established Successfully !!!");
})
module.exports = dbConnection;
