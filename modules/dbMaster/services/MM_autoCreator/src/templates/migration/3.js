
const create_third_block = (text1) => {
    return `down: async (queryInterface, Sequelize) => {\n` +
    `    await queryInterface.dropTable('${text1}');\n` +
    `}\n` +
    `};`
}

module.exports = create_third_block;
