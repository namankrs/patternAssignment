const repeatCharacter = function (width,character) {
  let line = "";
  for(let column=0; column<width; column++) {
    line += character;
  }
  return line;
}

const readUserInput = function(inputs){
  let height1 = 0;
  let patternArgs = {};
  let patternArgs1 = {};
  let patternArgs2 = {};
  let pattern1 = inputs[2].split("_")[1];
  let typeOfPattern1 = inputs[2].split("_")[0];
  if (pattern1.toLowerCase() == "rectangle"){
    width1 = inputs[3];
    height1 = inputs[4];
    pattern2 = inputs[5].split("_")[1];
    typeOfPattern2 = inputs[5].split("_")[0];
    width2 = inputs[6];
    height2 = inputs[7];
  }else{
    width1 = inputs[3];
    pattern2 = inputs[4].split("_")[1];
    typeOfPattern2 = inputs[4].split("_")[0];
    width2 = inputs[5];
    height2 = inputs[6];
  }
  patternArgs1 = {pattern:pattern1,type:typeOfPattern1,width:width1,height:height1}
  patternArgs2 = {pattern:pattern2,type:typeOfPattern2,width:width2,height:height2}
  patternArgs = {patternArgs1:patternArgs1,patternArgs2:patternArgs2};
  return patternArgs;
}

const flipVertical = function(pattern){
  let flippedPattern = pattern.map(x=>x.split("").reverse().join(""));
  return flippedPattern;
}

const flipHorizontal = function(pattern){
  let flippedPattern = pattern.slice();
  flippedPattern = flippedPattern.reverse();
  return flippedPattern;
}
  

const mergePatterns = function(firstPattern,secondPattern){
  let mergedPatterns = [];
  for(index in firstPattern){
    mergedPatterns.push(firstPattern[index].concat(" ").concat(secondPattern[index]));
  }
  return mergedPatterns;
}

const composePatternsGenerator = function(func1,func2){
  return function(args1,args2){
    firstPattern = func1(args1);
    secondPattern = func2(args2);
    return mergePatterns(firstPattern,secondPattern);
  }
}
module.exports = {repeatCharacter,readUserInput,composePatternsGenerator,flipHorizontal,flipVertical,mergePatterns};
