const ax = require('axios');

module.exports = {
    post: {
        sendJSON: async (url, data) => {
            const config = {
                method: 'post',
                url,
                headers: {
                    'Content-Type': 'application/json'
                },
                data
            }
            const { status, body } = await ax(config);
        }
    }
}