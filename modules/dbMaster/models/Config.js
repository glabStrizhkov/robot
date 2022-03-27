
module.exports = (sequelize, DataTypes) => {
    const Config = sequelize.define(
        "Config",
       {

varId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'var_id',
},

varName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'var_name'
},

varType: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'var_type'
},

stringVal: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'string_val'
},

intVal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'int_val'
},
createdAt: {
   type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
},
updatedAt: {
    type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at',
},
deletedAt: {
    type: DataTypes.DATE,
        allowNull: true,
        field: 'deleted_at', 
}
 },
{
    "tableName": "config",
    "paranoid": true,
    "timestamps": true,
    "freezeTableName": true
}
    );
Config.attributes = {
    base: [

"varId",
"varName",
"varType",
"stringVal",
"intVal",
    ]
};
Config.include = { 
    base: (include = []) => {
        return {
            model: Config,
            as: 'config',
            required: false,
            attributes: Config.attributes.base,
            include,
        };
    }
};

return Config;
}