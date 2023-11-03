"use strict";

const response = require("./ress");
const {PrismaClient} = require("@prisma/client");

const database = new PrismaClient();

exports.tampilkanData = (req,res) => {
    database.mahasiswa.findMany()
    .then(value => {
        response.ok(value,res)
    })
    .catch(err => {
        response.err(err,res)
    })
}

exports.tambahData = (req,res) => {
    const nama = req.body.nama;
    const nim = req.body.nim;
    const jurusan = req.body.jurusan;
    const fakultas = req.body.fakultas;
    console.log(`${nama} ${nim} ${jurusan} ${fakultas} `)
    database.mahasiswa.create({
        data : {
            nama,
            nim,
            jurusan,
            fakultas
        }
    })
    .then(value => {
        response.ok(value, res);
    })
    .catch(err => {
        console.log(err);
        response.err(err,res);
    })
}