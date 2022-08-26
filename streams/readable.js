const fs = require("fs");

const stream = fs.createReadStream("./file.txt");

stream.on("data", (chunk) => {
  console.log("Read chunk:", chunk.toString());
});

stream.on("end", () => {
  console.log("No more data.");
});
