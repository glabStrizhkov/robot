const { Ax } = require('ax-request-builder')
const ax = new Ax(process.env.API_URL);

module.exports = {
    one:{
        by_instrumentId: async (instrumentId = '') => {
            const { status, data } = await ax.GET('/instruments/get/byObj', '', {
                key: "instrumentId",
                value: instrumentId
            });
            return { status, data };
        }
    }
}