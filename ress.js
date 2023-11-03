"use strict";

exports.ok = (value,res) => {
    const data = {
        value,
        status : 200 
    }

    res.json(data);
    res.end();
}

exports.err = (value,res) => {
    const data = {
        value,
        status : 500 
    }

    res.json(data);
    res.end();
}