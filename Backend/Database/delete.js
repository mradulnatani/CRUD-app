const dbConnection = require('./config');
const express = require('express');
const app = express();
app.use(express.json());

app.delete("/delete/:_id", async (req, res) => {
    const db = await dbConnection();
    const deleteData = await db.collection('userData').deleteOne({ _id: req.params.data });
    if(deleteData.acknowledged){
        res.send("Data Deleted successfully");
    }
});
