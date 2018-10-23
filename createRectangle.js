patternLib = require("./src/patternLib.js");
let {generateRectangle} = patternLib;
function main(){
let kindOfRectangle = process.argv[2];
let width = process.argv[3];
let height = process.argv[4];
console.log(generateRectangle(kindOfRectangle,width,height));
}
main();
