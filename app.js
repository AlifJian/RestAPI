// Import module/lib/framework yang diperlukan
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const route = require('./route');
const multer = require("multer");
const upload = multer();
// Body Parser Middleware

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));
// Untuk form-data
app.use(upload.array());
// Mengimport penjaluran program
app.use(route);

app.listen(3000, () => {
    console.log("server Running");
})