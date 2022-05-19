const { dbMaster } = require('../../../db/db');
const instrumentServices = require('./services');

module.exports = {
    addInstrument: async (req, res) => {
        await instrumentServices.createInstrument(req, res, dbMaster);
    },

    getInstrument: async (req, res) => {
        await instrumentServices.get.one.bySearchObject(req, res, dbMaster);
    },

    getAllInstruments: async (req, res) => {
        await instrumentServices.get.all.list(req, res, dbMaster);
    },

    connectInstrument: async (req, res) => {
        await instrumentServices.connectDis.connect(req, res, dbMaster);
    },

    disconnectInstrument: async (req, res) => {
        await instrumentServices.connectDis.disconnect(req, res, dbMaster);
    },

    updateInstrument: async (req, res) => {
        await instrumentServices.update(req, res, dbMaster);
    },

    removeInstrument: async (req, res) => {
        await instrumentServices.remove(req, res, dbMaster);
    },
}