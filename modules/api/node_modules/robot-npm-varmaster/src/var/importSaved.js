const fs = require('node:fs');
const pathM = require('path');

const { getRoot } = require('../helpers/getRoot')

const importSaves = (path) => {
    const root = getRoot().appRoot;

    try {
        const file = fs.readFileSync(pathM.join(root, path), 'utf8');
        const object = JSON.parse(file);
        return object;
    } catch (error) {
        return { msg: "failed", robotNPMSaveErr: error };
    }
}

module.exports = { importSaves };

