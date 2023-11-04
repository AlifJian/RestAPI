const express = require("express");
const route = express.Router();
const pengendali = require("./controller");


route.get('/mahasiswa', pengendali.tampilkanData);

route.get('/mahasiswa/profile/:id', pengendali.tampilkanDataDenganId);

route.post('/mahasiswa', pengendali.tambahData);

route.put('/mahasiswa/:id', pengendali.editData);

route.delete('/mahasiswa/:id', pengendali.hapusData);

module.exports = route;