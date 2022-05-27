const axios = require('axios');
const querystring = require('querystring');

class Ax {
    baseUrl

    constructor(baseUrl = '') {
        this.baseUrl = baseUrl;
    }

    _sender = async (config = {}) => {
        try {
            const response = await axios(config);
            const { status, data } = response;
            return { status, data }
        } catch (error) {
            const { status, data } = error.response;
            return { status, data };
        }
    }

    _buildUrl(route = '', param = '', query = {}){
        let url = this.baseUrl+route+'/'+param;

        const stringQuery = querystring.stringify(query);
        if(stringQuery !== '') url = url+'?'+stringQuery;
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
        return await this._sender(this._buildConfig(method, route, param, query, data));
    }

    GET = async (route = '', param = '', query = {}) => {
        return await this._send('GET', route, param, query, {});
    }

    POST = async (route = '', param = '', query = {}, data = {}) => {
        return await this._send('POST', route, param, query, data);
    }

    PATCH = async (route = '', param = '', query = {}, data = {}) => {
        return await this._send('PATCH', route, param, query, data);
    }

    DELETE = async (route = '', param = '', query = {}, data = {}) => {
        return await this._send('DELETE', route, param, query, data);
    }
}

module.exports = { Ax };