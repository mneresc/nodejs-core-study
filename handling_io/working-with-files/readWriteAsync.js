const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "giant.csv");

/**
 * assync version of readFile
 * Evitar chamar vários métodos assíncronos em sequência
 */
fs.readFile(filePath, "utf-8", function (err, data) {
  if (err) {
    console.log("Error", err);
    return;
  }
  console.log("Contents", data);
  updateFile(filePath, "4,Escrita Async,PHP,19");
});

function updateFile(filePath, content) {
  fs.writeFile(filePath, content, "utf-8", function (err) {
    if (err) {
      console.log("Error", err);
      return;
    }
    console.log("File written");
  });
}
