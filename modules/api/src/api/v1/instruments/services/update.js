const { Update } = require('../../../../helpers/Update');
const {dbMaster} = require("../../../../db/db");

module.exports = {
    update: async (req, res, dbMaster) => {
        const { instrumentId } = req.params;
        const data = req.body;
        if(!instrumentId) res.status(400).json({ msg: 'instrumentId is required' });
        else {
            try {
                const update = new Update(req, res, dbMaster, 'Instruments');
                await update.update('instrumentId', instrumentId, data);
            } catch (error) {
                res.status(500).json({ msg: 'Server error!', error });
            }
        }
    },

    connectDis: {
        connect: async (req, res, dbMaster) => {
            const { instrumentId } = req.params;
            if(!instrumentId) res.status(400).json({ msg: 'instrumentId is required' });

            try {
                const update = new Update(req, res, dbMaster, 'Instruments');
                await update.updateField('instrumentId', instrumentId, 'isConnected', 'true');
            } catch (error) {
                res.status(500).json({ msg: 'Server error!', error });
            }
        },

        disconnect: async (req, res, dbMaster) => {
            const { instrumentId } = req.params;
            if(!instrumentId) res.status(400).json({ msg: 'instrumentId is required' });

            try {
                const update = new Update(req, res, dbMaster, 'Instruments');
                await update.updateField('instrumentId', instrumentId, 'isConnected', 'false');
            } catch (error) {
                res.status(500).json({ msg: 'Server error!', error });
            }
        }
    }
}