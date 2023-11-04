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

exports.editData = (req,res) => {
    const id = parseInt(req.params.id);
    database.mahasiswa.findUnique({
        where : {
            id
        }
    })
    .then(value => {
        const nama = req.body.nama ? req.body.nama : value.nama;
        const nim = req.body.nim ? req.body.nim : value.nim;
        const jurusan = req.body.jurusan ? req.body.jurusan : value.jurusan;
        const fakultas = req.body.fakultas ? req.body.fakultas : value.fakultas;

        database.mahasiswa.update(
            {
                where : {
                    id
                },
                data : {
                    nama,
                    nim,
                    jurusan,
                    fakultas
                }
            }
        )
        .then(value => {
            response.ok(value, res);
        })
        .catch(err => {
            response.err(err,res);
        })

    })
    .catch(err => {
        response.err(err,res);
    })
}