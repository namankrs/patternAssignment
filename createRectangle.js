patternLib = require("./src/patternLib.js");
patternUtil = require("./src/patternUtil.js");
let {generateRectangle} = patternLib;
let {readUserInput} = patternUtil;
function main(){
  let userArgs = process.argv;
  patternArgs = readUserInput(userArgs);
  console.log(generateRectangle(patternArgs));
}
main();
