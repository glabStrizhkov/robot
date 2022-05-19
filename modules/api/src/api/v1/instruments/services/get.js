const { dbMaster } = require("../../../../db/db");


module.exports = {
    one: {
        bySearchObject: async (req, res, dbMaster) => {
            const { key, value } = req.query;
            if(!key || !value) res.status(400).json({ msg: 'All fields are required!', error: {} });
            try{
                const { status, data } = await dbMaster.crud.getOne('Instruments', key, value);
                if(status !== 200) res.status(500).json({ msg: 'dbMaster error', details: { status, data } });
                else if(data.data === null) res.status(400).json({msg: 'Such instrument is not exist.'})
                else res.status(200).json({ msg: 'GOT', data: data.data });
            } catch (error) {
                if(error) res.status(500).json({ msg: 'Server error!', error});
            }
        }
    },
    all: {
        list: async (req, res, dbMaster) => {
            try{
                const { status, data } = await dbMaster.crud.getAll('Instruments');
                if(status !== 200) res.stauts(500).json({ msg: 'dbMaster error', details: { status, data } });
                else res.status(200).json({ msg: 'GOT', data: data.data });
            } catch (error) {
                if(error) res.status(500).json({ msg: 'Server error!', error});
            }
        }
    }
}