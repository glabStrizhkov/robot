const fs = require('node:fs');
const pathM = require('path');

const { importSaves } = require('./importSaved')
const { getRoot } = require('../helpers/getRoot')

class Var {
    vars
    savable
    saved
    constructor(){
        const path = fs.readFileSync(pathM.join(__dirname, '../../confPath.txt'), 'utf8')
        const object = importSaves(path);
        if(object.robotNPMSaveErr) {
            console.log({
                "robot-npm-varmaster": {
                    msg: 'Couldn\'t import saved vars',
                    error: {},
                    details: object
                }
            });
            this.saved = {};

        }
        else{
            this.saved = object;
        }
    }

    setVars(object = {}){
        this.vars = object;
    }

    setSavable(object = {}){
        this.savable = object;
    }

    setVar(key, value, is_savable) {
        if (is_savable === true) this.savable[key] = value;
        else if (is_savable === false) this.vars[key] = value;
    }


    getVars(){
        return {
            variables: this.vars,
            savable: this.savable,
            saved: this.saved
        }
    }
}

const vars = new Var();

module.exports = { vars };