// add modules
const fs = require('fs');

const config = require('./insideConfig');

const getFull = () => {
    let insideConfigPath = config.get();
    let file = JSON.parse(fs.readFileSync(insideConfigPath, 'utf8'));
    return file
}
//exports
module.exports = getFull;