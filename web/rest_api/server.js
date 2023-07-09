require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABSE_URL, {useNewUrlParser: true});
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database"));

app.use(express.json());

const subscriberRouter = require('./routes/subscribers')
app.use('/subscribers', subscriberRouter);

app.listen(3000, () => console.log("Server Started"));