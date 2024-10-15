console.log("Test from JavaScript file");
console.log(__dirname);
console.log(__filename);

const path = require('node:path');
const textFile = path.join(__dirname, "sub", "file.txt");
console.log(textFile);
const fs = require("node:fs");
const textFileBuffer = fs.readFileSync(textFile);
const textFileContent = textFileBuffer.toString();
console.log(textFileContent);