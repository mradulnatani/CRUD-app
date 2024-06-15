const dbConnection = require('./config');
const express = require('express');
const app = express();
app.use(express.json());

app.put("/delete/:_id", async (req, res) => {
    const db = await dbConnection();
    const updateResult = await db.collection('userData').updateOne(
        { _id: req.params.dataId },
        { $set: req.body }
    );
    if(deleteData.acknowledged){
        res.send("Data Deleted successfully");
    }
});
