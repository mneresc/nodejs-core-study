const fs = require("fs");
const file = './watched.txt';
const moment = require("moment");

fs.watchFile(file, (current, previous) => {
    const time = moment().format("YYYY-MM-DD HH:mm:ss");
    return console.log(`update: ${file} -  ${time}`);
});