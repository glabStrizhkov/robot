// add modules
const fs = require('fs');

const config = require('./insideConfig');
const getFull = require('./getFull');

function getNum(file, key){
    for (i = 0; i < file.length; i++) {
        if (file[i][key]) {
            let element = file[i];
            return file.indexOf(element);
        }
    }
}

const deleteE = (key) => {
//get path
    let path = config.get();
// get file and number of element
        let file = getFull();
        let num = getNum(file, key);
// delete
        file.splice(num, 1);
// write file
        let data = JSON.stringify(file, null, 4);
        fs.writeFileSync(path, data);
}
//exports
module.exports = deleteE;