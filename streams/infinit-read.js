const fs = require("fs");
const stream = fs.createReadStream("/dev/urando");

let size = 0;
stream.on("data", (data) => {
  size += data.length;
  console.log("File size:", size);
});
