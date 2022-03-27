//
// const model = [
//     ["userId", "INTEGER", "user_id"], //the first one is always the key
//     ["userName", "STRING", "user_name"],
//     ["lastName", "STRING", "last_name"]
// ]
//
// const inModel = [
//     {
//         localName: "userId",
//         dbName: "user_id",
//         dataType: "INTEGER"
//     },
//     {
//         localName: "userName",
//         dbName: "user_name",
//         dataType: "STRING"
//     },
//     {
//         localName: "lastName",
//         dbName: "last_name",
//         dataType: "STRING"
//     }
// ]

class Model {
    compressedModel

    constructor(inModel) {
        let localCompressedModel = [];
        for (let i = 0; i < inModel.length; i++) {
            let now = [];
            now[0] = inModel[i]["localName"];
            now[1] = inModel[i]["dataType"];
            now[2] = inModel[i]["dbName"];
            localCompressedModel.push(now);
        }
        this.compressedModel = localCompressedModel;
    }
}

module.exports = { Model }