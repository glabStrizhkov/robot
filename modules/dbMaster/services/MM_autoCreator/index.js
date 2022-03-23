const { Config } = require('./src/classes/Config');
const { Model } = require('./src/classes/Model');
const modelBuilder = require('./src/builders/model_builder/builder');
const migrationBuilder = require('./src/builders/migration_builder/builder');

class MM_autoCreator {
    config
    modelName
    tableName

    constructor(dirname, model, table, migrations, migDate, models) {
        this.config = new Config(dirname, model, table, migrations, migDate, models);
        this.modelName = model;
        this.tableName = table;
    }

    create(
        model,
        isModel = true,
        isMigration = true
    ){
        try{
            const compressedModel = new Model(model);
            if(isModel) modelBuilder(
                this.config.modelsPath,
                compressedModel.compressedModel,
                this.modelName,
                this.tableName
            );
            if(isMigration) migrationBuilder(
                this.config.migrationsPath,
                compressedModel.compressedModel,
                this.modelName,
                this.tableName
            );
            return { msg: "DONE" };
        } catch (error) {
            return { msg: "CAN NOT GENERATE MODEL / MIGRATION", error }
        }

    }
}

module.exports = { MM_autoCreator };