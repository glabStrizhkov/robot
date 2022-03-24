const { SerialPort } = require('serialport');
const sleep = require('atomic-sleep');
const { exec } = require('child_process');
const axios = require('./axios');

const myIp = require('underscore')
    .chain(require('os').networkInterfaces())
    .values()
    .flatten()
    .find({family: 'IPv4', internal: false})
    .value()
    .address;

const getSerial = () => {
    let returnObj = { is_serialReady : true }
    const serial =  new SerialPort({ path: process.env.SERIAL_PATH , baudRate: +process.env.SERIAL_SPEED, autoOpen: true }, (error) => {
        console.log({ msg: "SERIAL IS NOT AVAILABLE!", error });
        returnObj.is_serialReady = false;
    });
    returnObj["serial"] = serial;
    return returnObj;
}

const send = (serial, is_serialReady) => {
    const send = (data) => {
        sleep(1000);
        serial.write(data.toString());
        return;
    }
    if(is_serialReady === true) {
        send(myIp);
        serial.close();
    } else {
        (async () => {
            await axios('POST', 'sendIP', '/ip', {
                ip: myIp
            });
        })();
    }
}

const sendIP = async () => {
    try {
        await exec(`chmod 666 ${process.env.SERIAL_PATH}`);
    } catch (error) {
        console.log({ msg: "SERIAL IS NOT AVAILABLE!", error });
    }
    const { serial, is_serialReady } = await getSerial();
    await send(serial, is_serialReady);

}

module.exports = sendIP;