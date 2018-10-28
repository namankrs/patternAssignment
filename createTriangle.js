patternLib = require("./src/patternLib.js")
patternUtil = require("./src/patternUtil.js")
let{generateTriangle} = patternLib;
let {readUserInput} = patternUtil;

function main(){
  let userArgs = process.argv;
  patternArgs = readUserInput(userArgs);
  console.log(generateTriangle(patternArgs));
}
main();


