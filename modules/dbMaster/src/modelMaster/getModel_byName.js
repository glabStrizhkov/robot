const fs = require('fs');
const path = require('path');
const db = require('../../models');

const getModel_byName = (modelName) => {
    let modelList = db.modelList;
    for (let i = 0; i < modelList.length; i++) {
        if(modelList[i] === modelName) {
            return { model: db[modelName] };
        }
    }
    return { err: 'No such model!' };
}

module.exports = getModel_byName;