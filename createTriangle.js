patternLib = require("./src/patternLib.js")
let{generateTriangle} = patternLib;

function main(){
let alignment = process.argv[2];
let height = process.argv[3];
console.log(generateTriangle(alignment,height));
}
main();


