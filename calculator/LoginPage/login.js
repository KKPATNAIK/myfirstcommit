const{ request } = require("express");
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded;

const app = express();
app.use("/assets", express.static("assets"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cgtc",
    database: "CgtcLogin"
});

connection.connect(console.log("connected")
)
