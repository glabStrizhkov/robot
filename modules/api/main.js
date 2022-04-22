const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { IP } = require('robot-npm-ip-holder');
require('dotenv').config();

const { SendIP } = require('./src/helpers/sendIP');

const { PORT, IP_HOLDER_URL, MY_PRODUCT_ID } = process.env;

const app = express();
const ipHolder = new IP(IP_HOLDER_URL, MY_PRODUCT_ID);
const sendIP = new SendIP(ipHolder);
(async () => {
    const sendIPResponse = await sendIP.sendIP();
    console.log(111, sendIPResponse);
})();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlencoded: true }));
app.use(express.text({ type: 'application/json' }));

app.get('/health', (req, res) => {
    res.status(200).send("OK");
});
app.use('/api', require('./src/api'));

app.listen(PORT, () => console.info(`API on port ${PORT}`));

