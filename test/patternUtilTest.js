const assert = require("assert");
const patternUtil = require("../src/patternUtil.js");
let {repeatCharacter,readUserInput} = patternUtil;

{
  const repeatCharacterTest = function(width,character,expectedOutput){
    assert.deepEqual(repeatCharacter(width,character),expectedOutput);
  }

  repeatCharacterTest(5,"-","-----");
}

{
  const testReadUserInput = function(inputs,expectedOutput){
    assert.deepEqual(readUserInput(inputs),expectedOutput);
  }
  testReadUserInput([1,2,3,4,5,6],{type:3,width:4,height:5});
  testReadUserInput([1,2,3,4],{type:3,width:4,height:undefined});
}

console.log("All tests passed");
