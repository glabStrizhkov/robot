# robot-npm-ip-holder 
*1.0.2-onlyserver*

npm module for working with we service ipHolder
This module help you to get and/or send your IP address to the server.

## install
```shell
npm install robot-npm-ip-holder --save
```

## Usage
```js
/*
* Add module to the project using require
*/
const { IP } = require('robot-npm-ip-holder');

/*
* declare variables of url of the host that wait for your data and your device id
*/
/*
* Add module to the project using require
*/
const { IP } = require('robot-npm-ip-holder');

/*
* declare variables of url of the host that wait for your data and your device id
*/
const url = 'https://myHolderHost.com/api/v1/ipHolder';
const id = '555';

/*
* Create an objet of the class IP and put there your url and id
*/
const sendIP = new IP(url, id);


/*
* Call IP's method sendIP, to send your ip to the host.
* The method returns object.
* The call mast be in the async function.
*/
(async () => {
    const response = await sendIP.sendIP();
    console.log(response);
})();

/*
* Call IP's method getIP to get your ip.
* The method returns string.
*/
(() => {
    const response = sendIP.getIP();
    console.log(response);
})();
```

## references
* support: glabstrizhkovgit@gmail.com
* changelog: https://github.com/glabStrizhkov/robot-npm-ip-holder/blob/master/CHANGELOG.md

