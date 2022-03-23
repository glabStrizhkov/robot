const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models/index');
const { dbAuthenticate } = require('./src/helpers/connections');

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlencoded: true }));

/** Exceptions are used without checking the token and roles. */
app.get('/health', (req, res) => {
    res.status(200).send("OK");
});

app.use('/api', require('./src/api'));

(async () => {
    await dbAuthenticate(sequelize);
    app.listen(PORT, () => console.info(`Service start on port ${PORT}`));
})();
