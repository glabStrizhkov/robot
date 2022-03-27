
'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('config', {

varId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'var_id',
},

varName: {
    type: Sequelize.STRING,
    allowNull: true,
    field: 'var_name'
},

varType: {
    type: Sequelize.STRING,
    allowNull: true,
    field: 'var_type'
},

stringVal: {
    type: Sequelize.STRING,
    allowNull: true,
    field: 'string_val'
},

intVal: {
    type: Sequelize.INTEGER,
    allowNull: true,
    field: 'int_val'
},
createdAt: {
   type: Sequelize.DATE,
   allowNull: false,
   field: 'created_at',
},
updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'updated_at',
},
deletedAt: {
    type: Sequelize.DATE,
    allowNull: true,
    field: 'deleted_at', 
}
 });
},

down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('config');
}
};