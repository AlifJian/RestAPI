const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// Body Parser Middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));
// parse application/json
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("server Running");
})