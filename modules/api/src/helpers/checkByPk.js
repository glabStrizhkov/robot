

const checkByPk = async (dbMaster, modelName, key, value) => {
    try{
        const { status, data } = await dbMaster.crud.getOne('Instruments', key, value);
        if(data.data === null) return { isExist: false }
        else return { isExist: true, data: data.data }
    } catch (error) {
        return { error };
    }
}

module.exports = { checkByPk };