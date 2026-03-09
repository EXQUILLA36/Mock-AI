require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.SERVER_PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(port => {
    console.log("Server is running")
})