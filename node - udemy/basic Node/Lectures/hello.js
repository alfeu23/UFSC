console.log("Hello from Node.js"); // Prints to console

const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from node js, this time in a text file"); //Isso vai puxar a funcao fs (file system) para podermos criar um arquivo
