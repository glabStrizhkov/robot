const YAML = require('yamljs');
const fs = require('node:fs')
const path = require('path');
const { execSync } = require('child_process')

const containerList = [ 'db-master' ];

const update = (ip) => {
    try {
        let composeObj = YAML.load(path.join(__dirname, '../../../../docker/changeable/docker-compose.yml'))
        for (let i = 0; i < containerList.length; i++) {
            const containerName = containerList[i];
            composeObj.services[containerName].hostname = ip;
            composeObj.services[containerName].environment.DB_HOST = ip;
        }
        fs.writeFileSync(
            path.join(__dirname, '../../../../docker/changeable/docker-compose.yml'),
            YAML.stringify(composeObj, 4, 2)
        )
        execSync('npm run docker:restart --prefix ../../../../docker/changeable');
        return { msg: 'Compose updated' }
    } catch (error) {
        return { msg: 'Compose updating failed!', error }
    }

}

const updateComposeIP = (object) => {
    if(object.isChanged === true) {
        return update(object.currentIP);
    } else {
        return { msg: 'Compose is already updated' };
    }
}

module.exports = { updateComposeIP };