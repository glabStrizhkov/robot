const { Ax } = require('ax-request-builder')
const ax = new Ax(process.env.API_URL);

const addInstrument = async (instrumentId) => {
    const template = {
        instrumentId: instrumentId,
        instrumentType: "clamp",
        instrumentLocalName: instrumentId,
        isConnected: "true",
        isCalibrated: "false"
    }

    const { status, data } = await ax.POST('/instruments/add', '', {}, template);
    return { status, data };
}

module.exports = { addInstrument };