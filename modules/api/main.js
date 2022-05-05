const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { IP } = require('robot-npm-ip-holder');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const axios = require('axios');

const { SendIP } = require('./src/helpers/sendIP');
const { specs } = require('./swagger');

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.get('/health', (req, res) => {
    res.status(200).send("OK");
});
app.use('/api', require('./src/api'));

(async () => {
    try {
        const config = {
            method: 'get',
            url: 'http://192.168.0.105:3002/health'
        }
        const ans = await axios(config);
        console.log({ response: ans.data });
    } catch (err) {
        console.log({ err });
    }
})()



app.listen(PORT, () => console.info(`API on port ${PORT}`));

