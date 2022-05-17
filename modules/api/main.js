const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { IP } = require('robot-npm-ip-holder');
const swaggerUi = require('swagger-ui-express');
const path = require('path');


const { SendIP } = require('./src/helpers/sendIP');
const { specs } = require('./swagger');
const { setVars } = require('./src/helpers/setVars');
const { updateComposeIP } = require('./src/helpers/updateComposeIP');
const { dbMaster } = require('./src/db/db');

const { PORT, IP_HOLDER_URL, MY_PRODUCT_ID, CUSTOM_IP } = process.env;

const healthObject = {
    PORT,
    IP_HOLDER_URL,
    MY_PRODUCT_ID
}

const app = express();
const ipHolder = new IP(IP_HOLDER_URL, MY_PRODUCT_ID, CUSTOM_IP);
const sendIP = new SendIP(ipHolder);
(async () => {
    const sendIPResponse = await sendIP.sendIP();
})();
setVars.serverStartSaving({ currentIP: ipHolder.ip });
healthObject.updateCompose = updateComposeIP(setVars.is_ipChanged());
healthObject.IP = ipHolder.ip;
healthObject.dbMaster = dbMaster.createCrud();
if(CUSTOM_IP !== 'false') healthObject.ipHolderMode = 'customIP mode';
else healthObject.ipHolderMode = 'default mode';

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

