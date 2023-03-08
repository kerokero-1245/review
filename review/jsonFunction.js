const fs = require('fs');

const getJsonData = (path) => {
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
}
const postJsonData = (params,path) => {
    const data = fs.readFileSync(path, 'utf8');
    const jsObject = JSON.parse(data);
    jsObject.push( params );
    fs.writeFile(path, JSON.stringify(jsObject), () => {});
};

module.exports = { getJsonData, postJsonData };