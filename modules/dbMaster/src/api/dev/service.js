const { MM_autoCreator } = require('../../../services/MM_autoCreator/');
require('../../../models')
const generate = (modelName, tableName, model, migDate, isModel, isMigration) => {
    const MM = new MM_autoCreator(
        __dirname,
        modelName,
        tableName,
        '../../../migrations',
        migDate,
        '../../../models'
    );
    return MM.create(model, isModel, isMigration);
}

module.exports = generate;