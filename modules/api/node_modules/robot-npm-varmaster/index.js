const { vars } = require('./src/var/Var');
const { save } = require('./src/var/save');


class RobotNpmVarMaster {
    vars
    savable
    saved

    constructor() {
        this._updateState();
    }

    _updateState(){
        const { variables, savable, saved } = vars.getVars();

        this.vars = variables;
        this.savable = savable;
        this.saved = saved;
    }

    setVars(variables, savable){
        vars.setVars(variables);
        vars.setSavable(savable);

        this._updateState();
    }

    setVar(key, value, is_savable = false){
        vars.setVar(key, value, is_savable);
        this._updateState();
    }

    save(path){
        return save(path, this.savable);
    }
}

const robotNpmVarMaster = new RobotNpmVarMaster();

module.exports = robotNpmVarMaster;