const response = require("./ress");

exports.tampilkanData = (req,res) => {
    response.ok("Selamat datang", res);
}