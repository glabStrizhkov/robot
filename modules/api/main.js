const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { IP } = require('robot-npm-ip-holder');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const { SendIP } = require('./src/helpers/sendIP');
const { specs } = require('./swagger');
const { setVars } = require('./src/helpers/setVars');
const { updateComposeIP } = require('./src/helpers/updateComposeIP');

const { PORT, IP_HOLDER_URL, MY_PRODUCT_ID } = process.env;

const healthObject = {
    PORT,
    IP_HOLDER_URL,
    MY_PRODUCT_ID
}

const app = express();
const ipHolder = new IP(IP_HOLDER_URL, MY_PRODUCT_ID);
const sendIP = new SendIP(ipHolder);
(async () => {
    const sendIPResponse = await sendIP.sendIP();
})();
setVars.serverStartSaving({ currentIP: ipHolder.ip });
healthObject.updateCompose = updateComposeIP(setVars.is_ipChanged());
healthObject.IP = ipHolder.ip;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlencoded: true }));
app.use(express.text({ type: 'application/json' }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.get('/health', (req, res) => {
    res.status(200).send({ msg: `api is working`, healthObject });
});
app.use('/api', require('./src/api'));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => console.info(`API on port ${PORT}`));

