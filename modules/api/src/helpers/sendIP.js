

class SendIP {
    ip
    _ipHolder

    constructor(ipHolder) {
        this._ipHolder = ipHolder;
        this._getIP();
    }

    sendIP = async () => {
        let ans = {};
        ans["msg"] = "IP ADDRESS SET";
        ans["type"] = "WEB";
        ans["status"] = "SUCCESS";

        let response = {};
        let type = 'WEB';
        response = await this._ipHolder.sendIP();
        if(response.error) {
            response = { msg: "Here mast be answer from method board" };
            type = 'BOARD';
            ans["type"] = "BOARD";
        }
        if(response.error && type === 'BOARD') {
            ans["msg"] = "Sending IP address failed!";
            ans["type"] = "ERROR";
            ans["status"] = "FAILED";
        }
        ans["response"] = response;

        return ans;
    }

    _getIP(){
        this.ip = this._ipHolder.getIP();
    }
}

module.exports = { SendIP };