const vars = require('robot-npm-varmaster');


class SetVars {
    lastSaved
    currentIP

    constructor() {
        this.lastSaved = vars.saved
    }

    setVars(unSavable, savable){
        vars.setVars(unSavable, savable);
        vars.save('./config/varsConfig.json')
    }

    serverStartSaving({ currentIP }){
        this.currentIP = currentIP;
        this.setVars({}, { currentIP });
    }

    is_ipChanged(){
        if(this.lastSaved.currentIP !== this.currentIP) {
            return {
                isChanged: true,
                currentIP: this.currentIP
            }
        } else {
            return {
                isChanged: false
            }
        }
    }


}

const setVars = new SetVars();

module.exports = { setVars };