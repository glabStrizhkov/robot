const { SerialPort } = require('serialport');
const sleep = require('atomic-sleep');

const serial = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 9600 });



const myIp = require('underscore')
    .chain(require('os').networkInterfaces())
    .values()
    .flatten()
    .find({family: 'IPv4', internal: false})
    .value()
    .address;


const send = (data) => {
    sleep(1000);
    serial.write(data.toString());
    return;        
}

send(myIp);