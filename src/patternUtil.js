const repeatCharacter = function (width,character) {
  let line = "";
  for(let column=0; column<width; column++) {
    line += character;
  }
  return line;
}

const readUserInput = function(inputs){
  let patternArgs = {};
  patternArgs = {type:inputs[2],width:inputs[3],height:inputs[4]}
  return patternArgs;
}
module.exports = {repeatCharacter,readUserInput};
