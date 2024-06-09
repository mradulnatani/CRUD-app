const dbConnection = require('./connect');
const fs = require('fs');
const create=async()=>{
    const input = process.argv;
    const db = await dbConnection();
   // const result = db.deleteOne();
}