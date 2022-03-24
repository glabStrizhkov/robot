const ax = require("axios");



const axios = async (method, type, path, data) => {
    if(type === "sendIP") {
        const baseUrl = process.env.SEND_IP_URL;
        const headers = { 'Content-Type': 'application/json' };
        let config = {};
        const url = baseUrl + path;

        switch (method) {
            case "GET":
                return await ax.get(url);
                break;

            case "POST":
                config = { method: 'post', url, headers, data }
                return await ax(config);
        }
    }

}

module.exports = axios;