const express = require("express");
const route = express.Router();
const pengendali = require("./controller");


route.get('/', pengendali.tampilkanData);

module.exports = route;