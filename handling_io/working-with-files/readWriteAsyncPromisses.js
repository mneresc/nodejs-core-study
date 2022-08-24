const fs = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "giant.csv");

/**
 * assync version of readFile
 * Evitar chamar vários métodos assíncronos em sequência
 */
fs.readFile(filePath, "utf-8").then(
  (data) => {
    console.log("Contents", data);
  },
  (err) => {
    console.log("Contents", err);
  }
);

async function run() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log("Contents assync", data);
  } catch (err) {
    console.log("Contents", err);
  }
}

run();
