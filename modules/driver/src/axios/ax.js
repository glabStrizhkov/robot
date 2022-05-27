const axios = require('axios');
const querystring = require('querystring');

class Ax {
    baseUrl

    constructor(baseUrl = '') {

        this.baseUrl = baseUrl;
    }

    _sender = async (config = {}) => {
         try {
             const { status, data } = await axios(config);
             return { status, data, meg: 'Success', is_err: false }
         } catch (error) {
             return { msg: 'Failed request!', is_err: true, error: JSON.stringify(error)};
         }
    }

    _buildUrl(route = '', param = '', query = {}){
        let url = this.baseUrl+route+'/'+param;
        const stringQuery = querystring.stringify(query);
        url = url+'?'+stringQuery;
        return url;
    }

    _buildConfig(method = '', route = '', param = '', query = {}, data = {}){
        return {
            method,
            url: this._buildUrl(route, param, query),
            headers: {
                "Content-Type": "application/json"
            },
            data
        }
    }

    _send = async(method = '', route = '', param = '', query = {}, data = {}) => {
        await this._sender(this._buildConfig(method, route, param, query, data));
    }

    POST = async (route = '', param = '', query = {}, data = {}) => {
        await this._send('POST', route, param, query, data);
    }
}