const repeatCharacter = function (width,character) {
  let line = "";
  for(let column=0; column<width; column++) {
    line += character;
  }
  return line;
}

const readUserInput = function(inputs){
  let patternArgs = {};
  let typeOfPattern = inputs[2].split("_")[0];
  let pattern = inputs[2].split("_")[1];
  patternArgs = {type:typeOfPattern,width:inputs[3],height:inputs[4]}
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
