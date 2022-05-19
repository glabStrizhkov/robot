const { createInstrument } = require('./create');
const get = require('./get');
const { update, connectDis } = require('./update')
const { remove } = require('./remove');

module.exports = { createInstrument, get, update, connectDis, remove };