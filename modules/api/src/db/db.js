const { CRUD } = require('robot-npm-dbmaster');
const vars = require('robot-npm-varmaster');

class DBMaster {
    crud
    dbMaster_url
    createCrud(){
        try {
            this.dbMaster_url = `http://${vars.savable.currentIP}:${process.env.DB_MUSTER_PORT}`
            console.log(this.dbMaster_url);

            this.crud = new CRUD(this.dbMaster_url);
            return { msg: 'The object crud is successfully created' };
        } catch (error) {
            console.log('Could not create the object crud');
            return { msg: 'Could not create the object crud', error };
        }

    }
}

const dbMaster = new DBMaster();

module.exports = { dbMaster };