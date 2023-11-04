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