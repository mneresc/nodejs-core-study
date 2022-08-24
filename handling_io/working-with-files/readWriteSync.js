const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "giant.csv");

/**
 * sync version of readFile
 */
const file = fs.readFileSync(filePath, "utf-8");
console.log("Contents",file);

fs.writeFileSync(filePath, "4,Escrita,PHP,19", "utf-8");
console.log("File written");

const metadata = fs.statSync(filePath);
console.log("Metadata", metadata);

const access = fs.accessSync(filePath);
console.log("Access: ",access)