const {dbMaster} = require("../../../../db/db");


const createInstrument  = async (req, res, dbMaster) => {
    const {
        instrumentId,
        instrumentType,
        instrumentLocalName,
        isConnected,
        isActive
    } = req.body;
    console.log(111, req.body);
    if( !instrumentId ||
        !instrumentType ||
        !instrumentLocalName ||
        !isConnected ||
        !isActive) res.status(400).json({ msg: 'All fields are required!', error: {} });

    try {
        const { status, data } = await dbMaster.crud.create('Instruments', {
            instrumentId,
            instrumentType,
            instrumentLocalName,
            isConnected,
            isActive
        });
        if(status !== 200) res.status(500).json({ msg: 'dbMaster error', details: { status, data } });
        else res.status(200).json({ msg: 'Instrument created' });
    } catch (error) {
        if(error) res.status(500).json({ msg: 'Server error!', error});
    }
}

module.exports = { createInstrument };