const { Sender } = require('./Sender');

class CRUD {
    _Url
    _sender
    constructor(url) {
        this._Url = url;
        this._sender = new Sender(url);
    }

    create = async (Model, inData) => {
        const { status, data } = await this._sender.POST([ Model ], inData)
        return { status, data };
    }

    getOne = async (Model, by, value) => {
        return await this._sender.GET('one', [ Model ], [{ key: by, value }]);
    }

    getAll = async (Model) => {
        return await this._sender.GET('all', [ Model ]);
    }

    update = async (Model, by, inData) => {
        console.log(511, by);
        console.log(522, inData);
        console.log(533, {by, data: inData});
        return await this._sender.PATCH([ Model ], { by, data: inData });
    }

    remove = async (Model, by) => {
        return await this._sender.DELETE([ Model ], { by });
    }
}

module.exports = { CRUD };