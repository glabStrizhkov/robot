const first_block = require("../../templates/model/1");
const second_block = require("../../templates/model/2");
const third_block = require("../../templates/model/3");
const getAttributes = require("../../templates/model/4");
const getInclude = require("../../templates/model/5");

const fs = require('fs');

// const model = [
//     ["userId", "INTEGER", "user_id"], //the first one is always the key
//     ["userName", "STRING", "user_name"],
//     ["lastName", "STRING", "last_name"]
// ]

const modelBuilder = (path, model, modelName, tableName) => {
    let string = ``;

    const attributesArr = [];
    for (let i = 0; i < model.length; i++) {
        attributesArr.push(model[i][0]);
    }

    string = string + '\n' + first_block(modelName);
    string = string + '\n' + second_block(model)+`},`;
    string = string + '\n' + third_block(tableName);
    string = string + '\n' + `    );`;
    string = string + '\n' + getAttributes(modelName, attributesArr);
    string = string + '\n' + getInclude(modelName, tableName);
    string = string + '\n' + `return ${modelName};`
    string = string + '\n' + '}'
    console.log(path);

    fs.writeFileSync(path, string);
}

module.exports = modelBuilder;