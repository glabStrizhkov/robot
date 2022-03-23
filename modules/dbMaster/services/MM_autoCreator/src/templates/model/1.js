/*
const text1 = `User`;
*/
const first_block_builder = (text1) => {
    return `module.exports = (sequelize, DataTypes) => {\n` +
        `    const ${text1} = sequelize.define(\n` +
        `        "${text1}",\n` +
        `       {\n`
}

module.exports = first_block_builder;