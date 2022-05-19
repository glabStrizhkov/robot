const {Update} = require("../../../../helpers/Update");
const { checkByPk } = require('../../../../helpers/checkByPk');


const remove = async (req, res, dbMaster) => {
    const { instrumentId } = req.params;
    if(!instrumentId) res.status(400).json({ msg: 'instrumentId is required' });

    try {
        const isExist = await checkByPk(dbMaster, 'Instruments', 'instrumentId', instrumentId);
        if(isExist.error) res.status(500).json({ msg: 'Server error!', error: isExist.error});
        else if(isExist.isExist === false) return this.res.status(400).json({ msg: "This object is not exist" });

        else {
            const ans = await dbMaster.crud.remove('Instruments', { instrumentId });
            res.status(200).json({ msg: 'REMOVED' });
        }
    } catch (error) {
        res.status(500).json({ msg: 'Server error!', error });
    }
}

module.exports = { remove };