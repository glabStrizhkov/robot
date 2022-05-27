const hwController = require('./src/hardware/hwController');

module.exports = async () => {
    console.log( await hwController.addInstrument('clamp5551'));
}

