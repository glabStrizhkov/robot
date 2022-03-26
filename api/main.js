const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlencoded: true }));
app.use(express.text({ type: 'application/json' }));

app.get('/health', (req, res) => {
    res.status(200).send("OK");
});
app.use('/api', require('./api'));

app.listen(PORT, () => console.info(`API on port ${PORT}`));

