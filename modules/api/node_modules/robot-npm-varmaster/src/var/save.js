const fs = require('node:fs');
const pathM = require('path');

const { getRoot } = require('../helpers/getRoot')

const save = (path, object) => {
    fs.writeFileSync(pathM.join(__dirname, '../../confPath.txt'), path);
    const root = getRoot().appRoot;

    try {
        const string = JSON.stringify(object, null, 4);
        fs.writeFileSync(pathM.join(root, path), string);
        return { msg: "saved" }
    } catch (error) {
        return { msg: "failed", robotNPMSaveErr: error };
    }


}

module.exports = { save };