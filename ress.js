"use strict";

exports.ok = (value,res) => {
    const data = {
        status : 200 ,
        value
    }

    res.json(data);
    res.end();
}

exports.err = (value,res) => {
    const data = {
        status : 500 ,
        value
    }
    res.json(data);
    res.end();
}

exports.notFound = (res) => {
    const data = {
        status : 404 ,
        value : "Tidak Ditemukan"
    }

    res.json(data);
    res.end();
}