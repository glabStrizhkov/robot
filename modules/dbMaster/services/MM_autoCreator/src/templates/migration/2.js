// const model = [
//     ["userId", "INTEGER", "user_id"], //the first one is always the key
//     ["userName", "STRING", "user_name"]
// ]

const idText = (text1, text2) => {
    return `${text1}: {\n` +
        `    type: Sequelize.INTEGER,\n` +
        `    primaryKey: true,\n` +
        `    autoIncrement: true,\n` +
        `    field: '${text2}',\n` +
        `},\n`
}

const getOneField = (text1, text2, dataType) => {
    let type = ``;
    if(dataType == "INTEGER") type = `    type: Sequelize.INTEGER,\n`;
    else type = `    type: Sequelize.STRING,\n`;

    return `${text1}: {\n` +
        type +
        `    allowNull: true,\n` +
        `    field: '${text2}'\n` +
        `},\n`
}

const getEndFields = () => {
    return `createdAt: {\n` +
        `   type: Sequelize.DATE,\n` +
        `   allowNull: false,\n` +
        `   field: 'created_at',\n` +
        `},\n` +
        `updatedAt: {\n` +
        `    type: Sequelize.DATE,\n` +
        `    allowNull: false,\n` +
        `    field: 'updated_at',\n` +
        `},\n` +
        `deletedAt: {\n` +
        `    type: Sequelize.DATE,\n` +
        `    allowNull: true,\n` +
        `    field: 'deleted_at', \n` +
        `}\n `
}

const second_block_create = (model) => {
    let modelString = ``;
    for (let i = 1; i < model.length; i++) {
        const now = model[i];
        modelString = modelString + `\n` + getOneField(now[0], now[2], now[1]);
    }
    return idText(model[0][0], model[0][2]) +
        modelString +
        getEndFields() +
        `});\n` +
        `},\n`;

}

module.exports = second_block_create;