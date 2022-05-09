// add modules
const getFull = require('./getFull');

const get = (key) => {
// get config file
    let file = getFull();
// get element from the array
    for (i = 0; i < file.length; i++) {
        if (file[i][key]) {
            return file[i][key];
        }
    }
}
//exports
module.exports = get;