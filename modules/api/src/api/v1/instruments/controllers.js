const { dbMaster } = require('../../../db/db');
const instrumentServices = require('./services');

module.exports = {
    addInstrument: async (req, res) => {
        await instrumentServices.createInsstrument(req, res, dbMaster);
    },

    getInstrument(req, res){
        res.status(200).json({ msg: "OK "});
    },

    getAllInstruments(req, res){
        res.status(200).json({ msg: "OK "});
    },

    connectInstrument(req, res){
        res.status(200).json({ msg: "OK "});
    },

    disconnectInstrument(req, res){
        res.status(200).json({ msg: "OK "});
    },

    updateInstrument(req, res){
        res.status(200).json({ msg: "OK "});
    },

    removeInstrument(req, res){
        res.status(200).json({ msg: "OK "});
    }
}