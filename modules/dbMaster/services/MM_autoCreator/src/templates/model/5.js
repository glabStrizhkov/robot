const getInclude = (text1, text2) => {
    return `${text1}.include = { \n` +
    `    base: (include = []) => {\n` +
    `        return {\n` +
    `            model: ${text1},\n` +
    `            as: '${text2}',\n` +
    `            required: false,\n` +
    `            attributes: ${text1}.attributes.base,\n` +
    `            include,\n` +
    `        };\n` +
    `    }\n` +
    `};\n`
}

module.exports = getInclude;