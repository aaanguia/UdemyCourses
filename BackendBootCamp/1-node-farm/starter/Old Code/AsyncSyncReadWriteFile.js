const fs = require('fs'); // returns an object that will have a functions we can use for it.
const http = require('http');


/**
 * Reading files in node.js syncronus
 * 
 * const textIn = fs.readFileSync("./txt/input.txt", 'utf-8'); // Two arguments: path to file and Text Encoding type
 * console.log(textIn);
 * 
 * Writing to a file syncronus
 * 
 *
 * const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now()}`;
 * fs.writeFileSync('./txt/output.txt', textOut);
 * console.log('File has been written');
 * const fs = require('fs'); // returns an object that will have a functions we can use for it.
 * const textIn = fs.readFileSync("./txt/input.txt", 'utf-8'); // Two arguments: path to file and Text Encoding type
 * console.log(textIn);
 * 
 * Writing to a file
 * const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now()}`;
 * fs.writeFileSync('./txt/output.txt', textOut);
 * console.log('File has been written');
*/


 /**
  * Asynchronus Version of reading a file
  */
fs.readFile('./txt/start.txt', 'utf-8', (err,data1) => {
    if(err) return console.log("ERROR"); // You can write your own error keyword.
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err,data2) => {
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err,data3) => {
        console.log(data3);
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log("Your File Has Been Written");
            });
        });
    });
});
console.log('Reading File.....');
