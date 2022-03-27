const getModel = require('./getModel_byName')

class Crud {
    _Model
    _attributes

    constructor(modelName) {
        const modelObj = getModel(modelName);
        if(modelName.err) return modelObj;
        this._Model = modelObj.model;
        this._attributes = modelObj.model.attributes;
        return true;
    }

    async create(data) { return await this._Model.create(data) };
    async getOne(by){ return await this._Model.findOne({ where: by, attributes: this._attributes}) };
    async getAll(){ return await this._Model.findAll({attributes: this._attributes}) };
    async update(by, data){ return await this._Model.update(data, {where: by}) };
    async update(by, data){ return await this._Model.update(data, {where: by}) };
    async remove(by){ return await this._Model.destroy({ where: by, force: true }) };
}

module.exports = { Crud };
