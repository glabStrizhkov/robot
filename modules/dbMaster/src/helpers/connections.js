const dbAuthenticate = async (sequelize) => {
    try {
        await sequelize.authenticate();
        console.info('Connection with database has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database');
        process.exit(-1);
    }
};

module.exports = {
    dbAuthenticate,
};
