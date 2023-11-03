const express = require("express");
const route = express.Router();
const pengendali = require("./controller");


route.get('/mahasiswa', pengendali.tampilkanData);

route.post('/mahasiswa', pengendali.tambahData);

module.exports = route;