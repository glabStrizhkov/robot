const { dbMaster } = require("../../../../db/db");
const { checkByPk } = require('../../../../helpers/checkByPk');


const createInstrument  = async (req, res, dbMaster) => {
    const {
        instrumentId,
        instrumentType,
        instrumentLocalName,
        isConnected,
        isActive
    } = req.body;
    if( !instrumentId ||
        !instrumentType ||
        !instrumentLocalName ||
        !isConnected ||
        !isActive) res.status(400).json({ msg: 'All fields are required!', error: {} });

    try {
        const isExist = await checkByPk(dbMaster, 'Instruments', 'instrumentId', instrumentId);
        if(isExist.error) res.status(500).json({ msg: 'Server error!', error: isExist.error});
        else if(isExist.isExist === true) res.status(400).json({ msg: 'This instrument is already exist'});

        else {
            const isExistName = await checkByPk(dbMaster, 'Instruments', 'instrumentLocalName', instrumentLocalName);
            if(isExistName.error) res.status(500).json({ msg: 'Server error!', error: isExistName.error});
            else if(isExistName.isExist === true) res.status(400).json({ msg: 'This instrument\'s name is already exist'});
            else {
                const { status, data } = await dbMaster.crud.create('Instruments', {
                    instrumentId,
                    instrumentType,
                    instrumentLocalName,
                    isConnected,
                    isActive
                });
                if(status !== 200) res.status(500).json({ msg: 'dbMaster error', details: { status, data } });
                else res.status(200).json({ msg: 'Instrument created' });
            }
        }

    } catch (error) {
        if(error) res.status(500).json({ msg: 'Server error!', error});
    }
}

module.exports = { createInstrument };