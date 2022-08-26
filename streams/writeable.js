const fs = require('fs');

const stream = fs.createWriteStream('./file.txt');

for(let i = 0; i < 1000000; i++) {
  stream.write(`Line ${i} - knock knock \n`);
}