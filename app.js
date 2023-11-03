const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const route = require('./route');
// Body Parser Middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : false}));
// parse application/json
app.use(bodyParser.json());

// Mengimport penjaluran program
app.use(route);

app.listen(3000, () => {
    console.log("server Running");
})