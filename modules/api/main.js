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
    console.log(sendIPResponse);
})();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlencoded: true }));
app.use(express.text({ type: 'application/json' }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.get('/health', (req, res) => {
    res.status(200).send({ msg: `api is working`, status: 'OK', port: PORT });
});
app.use('/api', require('./src/api'));

(async() => {
   try {
        const ans = await axios({
            method: 'get',
            url: '172.17.0.1:3002/health'
        })
       console.log({ res: ans.data });
   } catch (error) {
       console.log({ error });
   }
})()

app.listen(PORT, () => console.info(`API on port ${PORT}`));

