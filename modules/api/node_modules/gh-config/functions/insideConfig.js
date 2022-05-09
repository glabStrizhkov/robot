// add modules
const pathLib = require('path');
const fs = require('fs');

exports.connect = (dirname, path) => {
    let fullPath = pathLib.join(dirname, path);
    fs.writeFileSync(pathLib.join(__dirname, '../config/config.txt'), fullPath);
}

exports.get = () => {
    let fullPath = fs.readFileSync(pathLib.join(__dirname, '../config/config.txt'), 'utf8');
    return fullPath;
}