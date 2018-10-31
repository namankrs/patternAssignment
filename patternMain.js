patternUtil = require("./src/patternUtil.js");
patternLib = require("./src/patternLib.js");
let {generateRectangle,generateTriangle,generateDiamond} = patternLib;
let {readUserInput,composePatternsGenerator} = patternUtil;
let patternFuctions = {rectangle:generateRectangle,triangle:generateTriangle,diamond:generateDiamond};
let inputs = process.argv;
let patternArgs = readUserInput(inputs); 
let firstPattern = patternArgs.patternArgs1.pattern;
let secondPattern = patternArgs.patternArgs2.pattern;
let firstfunc = patternFuctions[firstPattern];
let secondfunc = patternFuctions[secondPattern];
let generatePattern = composePatternsGenerator(firstfunc,secondfunc);
let pattern = generatePattern(patternArgs.patternArgs1,patternArgs.patternArgs2);
console.log(pattern.join("\n"));

