patternLib = require("./src/patternLib.js");
let {generateDiamond} = patternLib;

function main(){
  let kindOfDiamond = process.argv[2];
  let height = process.argv[3];
  console.log(generateDiamond(kindOfDiamond,height));
}
main();
