const { SerialPort } = require('serialport');
const sleep = require('atomic-sleep');
const { exec } = require('child_process');
const axios = require('./axios');

module.exports = () => {
    const myIp = require('underscore')
        .chain(require('os').networkInterfaces())
        .values()
        .flatten()
        .find({family: 'IPv4', internal: false})
        .value()
        .address;

    try {
        exec(`sudo chmod 666 ${process.env.SERIAL_PATH}`);
    } catch (error) {
        console.log({ msg: "SERIAL IS NOT AVAILABLE!", error });
    }
    console.log(111, process.env.SERIAL_SPEED);
    const serial = new SerialPort({ path: process.env.SERIAL_PATH , baudRate: +process.env.SERIAL_SPEED }, (error) => {
        console.log({ msg: "SERIAL IS NOT AVAILABLE!", error });
    });

    const send = (data) => {
        sleep(1000);
        serial.write(data.toString());
        return;
    }
    if(serial) {
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