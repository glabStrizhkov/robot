const third_block_builder = (text1) => {
    return JSON.stringify({
        tableName: text1,
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
    }, null, 4)
}

module.exports = third_block_builder;