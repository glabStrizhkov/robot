const hwServices = require('./services');

module.exports = {
    addInstrument: async (instrumentId = '') => {
        if(instrumentId === '' || !instrumentId) return { is_done: false, error: { msg: 'by_instrumentId is required field' }};

        const is_exist = await hwServices.getInstruments.one.by_instrumentId(instrumentId);
        if(is_exist.data.data) return { is_done: true, type: 'ALREADY_EXIST'};

        const { status, data } = await hwServices.addInstrument(instrumentId)
        if(status !== 200) return { is_done: false, type: 'CATCH', error: {}, details: { status, data }}
        return { is_done: true, type: "CREATED"};
    }
}