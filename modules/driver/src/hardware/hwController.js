const hwServices = require('./services');

module.exports = {
    addInstrument: async (instrumentId = '') => {
        if(instrumentId === '' || !instrumentId) return { is_done: false, error: { msg: 'by_instrumentId is required field' }};

        if(await hwServices.getInstruments.one.by_instrumentId(instrumentId).data){
            return { is_done: true, type: 'ALREADY_EXIST'};
        }


    }
}