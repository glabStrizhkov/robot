const arr = ["userId", "userName", "lastName"];

const getAttributes = (text1, arr) => {
  let listString = ``;
    for (let i = 0; i < arr.length; i++) {
        listString = listString + `\n` + `"${arr[i]}",`;
    }
    return `${text1}.attributes = {\n` +
    `    base: [\n` +
        listString +
    `\n` +
    `    ]\n` +
    `};`
}

module.exports = getAttributes;