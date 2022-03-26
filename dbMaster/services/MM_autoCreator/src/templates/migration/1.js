
const first_block_create = (text1) => {
    return `'use strict';\n` +
    `module.exports = {\n` +
    `    up: async (queryInterface, Sequelize) => {\n` +
    `        await queryInterface.createTable('${text1}', {\n`
}

module.exports = first_block_create;