const dbConnection = require('./config');
const express = require('express');
const app = express();
app.use(express.json());

app.get("/find/:_id", async (req, res) => {
    const db = await dbConnection();
    const findData = await db.collection('userData').findOne({ _id: req.params.data });
    if(findData.acknowledged){
        res.send("Data found successfully");
    }
});
