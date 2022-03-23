const path = require('path');

class Config {
    migrationsPath
    modelsPath

    constructor(dirname, modelName, tableName, migrations, migDate, models) {
        const modelPathName = modelName + '.js';
        const migrationPathName = migDate + '-create-' + tableName + '.js'
        this.migrationsPath = path.join(dirname, migrations, migrationPathName);
        this.modelsPath = path.join(dirname, models, modelPathName);
    }
}

module.exports = { Config };

