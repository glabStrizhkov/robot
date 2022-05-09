//add modules
const fs = require('fs');

const getFull = require('./getFull');
const conf = require('./insideConfig')

const add = (obj) => {
    //get path
    let path = conf.get();
    //get config file
    let fullConfig = getFull();
    //add element
    fullConfig.push(obj);
    // write file
    let data = JSON.stringify(fullConfig, null, 4);
    fs.writeFileSync(path, data);

}
// exports
module.exports = add;