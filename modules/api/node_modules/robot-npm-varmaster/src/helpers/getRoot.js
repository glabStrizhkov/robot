const path = require('path');


const getRoot = () => {
    const packageRoot = path.join(__dirname, '../../');
    const appRoot = path.join(packageRoot, '../../');
    return { packageRoot, appRoot }
}

module.exports = { getRoot }