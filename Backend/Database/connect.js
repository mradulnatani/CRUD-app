const {MongoClient} = require('mongodb');
const path = require('path');
const database = 'CRUD-appdb';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

 async function dbConnection(){
    const result = await client.connect();
    const db = result.db(database);
    return db.collection('user-data');
    
}
dbConnection().then((resp)=>{
    console.log(resp);
    console.log("Connection established Successfully !!!");
})
