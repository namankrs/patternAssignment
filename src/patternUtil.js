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
module.exports = {repeatCharacter,readUserInput};
