const { getRoot } = require('../helpers/getRoot');

class Config {
    packageRoot
    appRoot

    constructor() {
        const { packageRoot, appRoot } = getRoot();
        this.packageRoot = packageRoot;
        this.appRoot = appRoot;
    }
}

const config = new Config();

module.exports = { config };