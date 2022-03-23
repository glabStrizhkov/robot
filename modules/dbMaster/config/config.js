require("dotenv").config();

module.exports = {
    migrationStorageTableName: 'sequelize_meta',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    dialect: process.env.DIALECT,
    logging: false,
};
