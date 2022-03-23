const first_block = require("../../templates/migration/1");
const second_block = require("../../templates/migration/2");
const third_block = require("../../templates/migration/3");


const fs = require('fs');

const model = [
    ["userId", "INTEGER", "user_id"], //the first one is always the key
    ["userName", "STRING", "user_name"],
    ["lastName", "STRING", "last_name"]
]

const migrationBuilder = (path, model, modelName, tableName) => {
    let string = ``;

    string = string + '\n' + first_block(tableName);
    string = string + '\n' + second_block(model);
    string = string + '\n' + third_block(tableName);

    fs.writeFileSync(path, string);
}

module.exports = migrationBuilder;