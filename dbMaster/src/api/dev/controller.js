const generate  = require('./service');

module.exports = {
    createMM(req, res){
        const { modelName, tableName, migrationDate, isModel, isMigration, model } = req.body;
        if(!modelName || !tableName || !model || !migrationDate || !isModel || !isMigration){
            res.status(401).json({ msg: "BAD REQUEST!"})
        }
        const generator_ans = generate(modelName, tableName, model, migrationDate, isModel, isMigration);
        if(generator_ans.error) res.status(401).json(generator_ans);
        res.status(200).json({msg: "GENERATED"});
    }
}