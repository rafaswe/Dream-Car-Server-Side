//DB_USER= DreamCar
//DB_PASS= Zc9PUlGv3NNzbv8Z

const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ghkwm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Server check
app.get('/', (req, res) => {
    res.send('Dream car Server is running');
});

// Finding port
app.listen(port, () => {
    console.log("Listing from port = ", port);
})
