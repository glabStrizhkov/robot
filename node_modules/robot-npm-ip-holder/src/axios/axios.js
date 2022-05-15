const axios = require('axios');

module.exports = {
    async POST(url, data){
        try {
            const config = {
                method: 'post',
                url,
                headers: {
                    'Content-Type': 'application/json'
                },
                data
            }
            const response = await axios(config);
            return { msg: "SUCCESS", response };
        } catch (error) {
            return { msg: "Failed request! \nCheck the local module axios at ./src/axios/axios.js from the root. ", error };
        }
    }
}