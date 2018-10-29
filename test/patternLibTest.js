const assert = require("assert");
const patternLib = require("../src/patternLib.js");
const {generateRectangle} = patternLib;
const {generateTriangle} = patternLib;
const {generateDiamond} = patternLib;

//-------------------------------- Test cases for rectangle pattern -------------------------//

const testRectangle = function(rectArgs,expectedOutput){
  assert.deepEqual(generateRectangle(rectArgs),expectedOutput);
}

//----------------------------- Filled Rectangle ------------------------------//
{
  let expectedOutput_20_7 = ['********************'];
  expectedOutput_20_7.push('********************');
  expectedOutput_20_7.push('********************');
  expectedOutput_20_7.push('********************');
  expectedOutput_20_7.push('********************');
  expectedOutput_20_7.push('********************');
  expectedOutput_20_7.push('********************');

  testRectangle({type:"filled",width:20,height:7},expectedOutput_20_7);

  let expectedOutput_5_5 = ["*****"];
  expectedOutput_5_5.push("*****");
  expectedOutput_5_5.push("*****");
  expectedOutput_5_5.push("*****");
  expectedOutput_5_5.push("*****");

  testRectangle({type:"filled",width: 5,height:5},expectedOutput_5_5);

  let expectedOutput_2_2 =  ["**","**"];

  testRectangle({type:"filled",width:2, height:2},expectedOutput_2_2);

  let expectedOutput_2_3 = ["**","**","**",];

  testRectangle({type:"filled", width :2,height: 3},expectedOutput_2_3);
}

//----------------------------- Hollow Rectangle ------------------------------//
{
  let expectedOutput_5_5 = ["*****"];
  expectedOutput_5_5.push("*   *");
  expectedOutput_5_5.push("*   *");
  expectedOutput_5_5.push("*   *");
  expectedOutput_5_5.push("*****");

  testRectangle({type: "hollow",width: 5, height: 5},expectedOutput_5_5);

  let expectedOutput_20_7 = ["********************"];
  expectedOutput_20_7.push("*                  *");
  expectedOutput_20_7.push("*                  *");
  expectedOutput_20_7.push("*                  *");
  expectedOutput_20_7.push("*                  *");
  expectedOutput_20_7.push("*                  *");
  expectedOutput_20_7.push("********************");

  testRectangle({type: "hollow", width: 20,height: 7},expectedOutput_20_7);

  let expectedOutput_2_2 =  ["**","**"];

  testRectangle({type: "hollow", width: 2,height: 2},expectedOutput_2_2);
}

//----------------------------- Alternating line Rectangle ------------------------------//
{
  let expectedOutput_2_2 =  ["**","--"];

  testRectangle({type: "alternating",width: 2,height: 2},expectedOutput_2_2);

  let expectedOutput_5_5 = ["*****"];
  expectedOutput_5_5.push("-----");
  expectedOutput_5_5.push("*****");
  expectedOutput_5_5.push("-----");
  expectedOutput_5_5.push("*****");

  testRectangle({type: "alternating",width: 5,height: 5},expectedOutput_5_5);

  let expectedOutput_20_7 = ["********************"];
  expectedOutput_20_7.push("--------------------");
  expectedOutput_20_7.push("********************");
  expectedOutput_20_7.push("--------------------");
  expectedOutput_20_7.push("********************");
  expectedOutput_20_7.push("--------------------");
  expectedOutput_20_7.push("********************");

  testRectangle({type: "alternating",width: 20, height: 7},expectedOutput_20_7);

  let expectedOutput_3_3 =  ["***","---","***"];

  testRectangle({type: "alternating",width: 3,height: 3},expectedOutput_3_3);
}

//-------------------------------- Test cases for diamond pattern -------------------------//

const testDiamond = function (diamondArgs, expectedOutput){
  assert.deepEqual(generateDiamond(diamondArgs), expectedOutput);
}

//----------------------------- Filled Diamond ------------------------------//
{
  let expectedOutput_5 = ["  *  "];
  expectedOutput_5.push(" *** ");
  expectedOutput_5.push("*****");
  expectedOutput_5.push(" *** ");
  expectedOutput_5.push("  *  ");

  testDiamond({type: "filled", width: 5},expectedOutput_5);

  let expectedOutput_3 = [" * ","***"," * "];

  testDiamond({type: "filled",width: 3},expectedOutput_3);

  let expectedOutput_7 = ["   *   "];
  expectedOutput_7.push("  ***  ");
  expectedOutput_7.push(" ***** ");
  expectedOutput_7.push("*******");
  expectedOutput_7.push(" ***** ");
  expectedOutput_7.push("  ***  ");
  expectedOutput_7.push("   *   ");

  testDiamond({type: "filled",width: 7},expectedOutput_7);
}

//----------------------------- Hollow Diamond ------------------------------//
{
  let expectedOutput_5 = ["  *  "];
  expectedOutput_5.push(" * * ");
  expectedOutput_5.push("*   *");
  expectedOutput_5.push(" * * ");
  expectedOutput_5.push("  *  ");

  testDiamond({type: "hollow",width: 5},expectedOutput_5);

  let expectedOutput_3 = [" * ","* *"," * "];

  testDiamond({type: "hollow",width: 3},expectedOutput_3);

  let expectedOutput_7 = ["   *   "];
  expectedOutput_7.push("  * *  ");
  expectedOutput_7.push(" *   * ");
  expectedOutput_7.push("*     *");
  expectedOutput_7.push(" *   * ");
  expectedOutput_7.push("  * *  ");
  expectedOutput_7.push("   *   ");

  testDiamond({type: "hollow",width: 7},expectedOutput_7);
}

//----------------------------- Angled Diamond ------------------------------//
{
  let expectedOutput_5 = ["  *  "];
  expectedOutput_5.push(" / \\ ");
  expectedOutput_5.push("*   *");
  expectedOutput_5.push(" \\ / ");
  expectedOutput_5.push("  *  ");

  testDiamond({type: "angled",width: 5},expectedOutput_5);

  let expectedOutput_3 = [" * ","* *"," * "];

  testDiamond({type: "angled",width: 3},expectedOutput_3);

  let expectedOutput_7 = ["   *   "];
  expectedOutput_7.push("  / \\  ");
  expectedOutput_7.push(" /   \\ ");
  expectedOutput_7.push("*     *");
  expectedOutput_7.push(" \\   / ");
  expectedOutput_7.push("  \\ /  ");
  expectedOutput_7.push("   *   ");

  testDiamond({type: "angled",width: 7},expectedOutput_7);
}

//-------------------------------- Test cases for triangle pattern -------------------------//

const testTriangle = function(patternArgs,expectedOutput){
  assert.deepEqual(generateTriangle(patternArgs), expectedOutput);
}

//----------------------------- Left Triangle Pattern ------------------------------//
{
  let expectedOutput_3 = ["*  ","** ","***"];

  testTriangle({type: "left",width: 3},expectedOutput_3);

  let expectedOutput_4 = ["*   "];
  expectedOutput_4.push("**  ");
  expectedOutput_4.push("*** ");
  expectedOutput_4.push("****");

  testTriangle({type: "left",width: 4},expectedOutput_4);

  let expectedOutput_5 = ["*    "];
  expectedOutput_5.push("**   ");
  expectedOutput_5.push("***  ");
  expectedOutput_5.push("**** ");
  expectedOutput_5.push("*****");

  testTriangle({type: "left", width: 5},expectedOutput_5);

  let expectedOutput_6 = ["*     "];
  expectedOutput_6.push("**    ");
  expectedOutput_6.push("***   ");
  expectedOutput_6.push("****  ");
  expectedOutput_6.push("***** ");
  expectedOutput_6.push("******");

  testTriangle({type: "left", width: 6},expectedOutput_6);
}

//----------------------------- Right Triangle Pattern ------------------------------//
{
  let expectedOutput_3 = ["  *"];
  expectedOutput_3.push(" **");
  expectedOutput_3.push("***");

  testTriangle({type: "right", width: 3},expectedOutput_3);

  let expectedOutput_4 = ["   *"];
  expectedOutput_4.push("  **");
  expectedOutput_4.push(" ***");
  expectedOutput_4.push("****");

  testTriangle({type: "right", width: 4},expectedOutput_4);

  let expectedOutput_5 = ["    *"];
  expectedOutput_5.push("   **");
  expectedOutput_5.push("  ***");
  expectedOutput_5.push(" ****");
  expectedOutput_5.push("*****");

  testTriangle({type: "right",width: 5},expectedOutput_5);

  let expectedOutput_6 = ["     *"];
  expectedOutput_6.push("    **");
  expectedOutput_6.push("   ***");
  expectedOutput_6.push("  ****");
  expectedOutput_6.push(" *****");
  expectedOutput_6.push("******");

  testTriangle({type: "right", width: 6},expectedOutput_6);
}
console.log("All tests passed");
