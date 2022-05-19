const { checkByPk } = require('./checkByPk');
const {dbMaster} = require("../db/db");
const {vars} = require("robot-npm-varmaster/src/var/Var");

class Update {
    req
    res
    dbMaster
    modelName

    constructor(req, res, dbMaster, modelName) {
        this.req = req;
        this.res = res;
        this.dbMaster = dbMaster;
        this.modelName = modelName;
    }


    _get = async (key, value) => {
        const isExist = await checkByPk(this.dbMaster, this.modelName, key, value);
        if(isExist.isExist === false) return this.res.status(400).json({ msg: "This object is not exist" });
        else return { data: isExist.data };
    }

    update = async (key, value, data) => {
        const isExist = await this._get(key, value);
        if(isExist.data) {
            let searchObj = {};
            searchObj[key] = value;
            try{
                const ans = await dbMaster.crud.update(this.modelName, searchObj, data);
                this.res.status(200).json({ msg: 'UPDATED', dbMasterRes: ans.data });
            } catch (error) {
                this.res.status(500).json({ msg: 'Server error!', error });
            }
        }
    }

    updateField = async (keyFilter, valueFilter, key, value) => {
        let { data } = await this._get(keyFilter, valueFilter);
        data[key] = value;
        await this.update(keyFilter, valueFilter, data);
    }
}

module.exports = { Update }