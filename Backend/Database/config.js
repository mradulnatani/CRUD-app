//const {MongoClient} = require('mongodb');
const dbConnection=()=>{

const mongoose = require('mongoose');
//const path = require('path');
//const database = 'CRUD-appdb';
const url = 'mongodb://localhost:27017/CRUD-appdb';
//const client = new MongoClient(url);
mongoose.connect(url);
}
dbConnection();

module.exports = dbConnection;

/*
 async function dbConnection(){
    await mongoose.connect(url);
   // const result = await client.connect();
    const setSchema = new mongoose.Schema({
        Email : String,
        Name : String,
        Data : String
    })
    const setModel = mongoose.model('user-data',setSchema);
    let data = new setModel({Email:"mradulnatani0@gmail.com",Name:"Mradul Natani",Data:"Let us see what happens further"});
    let result = await data.save();
    console.log(result);
    //return db.collection('user-data');
    
}
dbConnection().then((resp)=>{
    console.log(resp ?? "DONE !!");
    console.log("Connection established Successfully !!!");
})
module.exports = dbConnection;
*/