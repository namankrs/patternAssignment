const assert = require("assert");
const patternUtil = require("../src/patternUtil.js");
let {repeatCharacter,readUserInput,flipVertical,flipHorizontal,mergePatterns} = patternUtil;

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
  testReadUserInput([1,'filled_rectangle',4,5,'sharma_naman',6,7],{patternArgs1:{pattern:'rectangle',type:'filled',width:4,height:5},patternArgs2:{pattern:'naman',type:'sharma',width:6,height:7}});
  testReadUserInput([1,'left_triangle',4,'sharma_naman',6,7],{patternArgs1:{pattern:'triangle',type:'left',width:4,height:0},patternArgs2:{pattern:'naman',type:'sharma',width:6,height:7}});
}

{
  const testflipVertical = function(input,expectedOutput){
    assert.deepEqual(flipVertical(input),expectedOutput);
  }
  testflipVertical(["*  ","** ","***"],["  *"," **","***"]);
}

{
  const testflipHorizontal = function(input,expectedOutput){
    assert.deepEqual(flipHorizontal(input),expectedOutput);
  }
  testflipHorizontal(["*  ","** ","***"],["***","** ","*  "]);
}

{
  const testMergePatterns = function(firstPattern,secondPattern,expectedOutput){
    assert.deepEqual(mergePatterns(firstPattern,secondPattern),expectedOutput);
  }
  testMergePatterns(["* ","**"],[" *","**"],["*   *","** **"]);
}

console.log("All tests passed");
