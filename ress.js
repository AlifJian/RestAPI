"use strict";

exports.ok = (value,res) => {
    const data = {
        value,
        status : 200 
    }

    res.json(data);
    res.end();
}