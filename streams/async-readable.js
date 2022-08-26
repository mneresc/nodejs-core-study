const fs = require("fs");
const stream = fs.createReadStream("./file.txt");

async function run() {
  for await (const chunk of stream) {
    console.log("Chunk:", chunk.toString());
  }
}

run();