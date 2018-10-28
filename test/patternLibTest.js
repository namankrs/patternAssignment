const assert = require("assert");
const patternLib = require("../src/patternLib.js");
const {generateRectangle} = patternLib;
const {generateTriangle} = patternLib;
const {generateDiamond} = patternLib;

//-------------------------------- Test cases for rectangle pattern -------------------------//

const testRectangle = function(rectArgs,expectedOutput){
  assert.equal(generateRectangle(rectArgs),expectedOutput);
}

//----------------------------- Filled Rectangle ------------------------------//
{
  let expectedOutput_20_7 = "********************\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "********************";

  testRectangle({type:"filled",width:20,height:7},expectedOutput_20_7);

  let expectedOutput_5_5 = "*****\n";
  expectedOutput_5_5 +=    "*****\n";
  expectedOutput_5_5 +=    "*****\n";
  expectedOutput_5_5 +=    "*****\n";
  expectedOutput_5_5 +=    "*****";

  testRectangle({type:"filled",width: 5,height:5},expectedOutput_5_5);

  let expectedOutput_2_2 =  "**\n";
  expectedOutput_2_2 +=     "**";

  testRectangle({type:"filled",width:2, height:2},expectedOutput_2_2);

  let expectedOutput_2_3 = "**\n";
  expectedOutput_2_3 +=    "**\n";
  expectedOutput_2_3 +=    "**";

  testRectangle({type:"filled", width :2,height: 3},expectedOutput_2_3);
}

//----------------------------- Hollow Rectangle ------------------------------//
{
  let expectedOutput_5_5 = "*****\n";
  expectedOutput_5_5 +=    "*   *\n";
  expectedOutput_5_5 +=    "*   *\n";
  expectedOutput_5_5 +=    "*   *\n";
  expectedOutput_5_5 +=    "*****";

  testRectangle({type: "hollow",width: 5, height: 5},expectedOutput_5_5);

  let expectedOutput_20_7 = "********************\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "********************";

  testRectangle({type: "hollow", width: 20,height: 7},expectedOutput_20_7);

  let expectedOutput_2_2 =  "**\n";
  expectedOutput_2_2 +=     "**";

  testRectangle({type: "hollow", width: 2,hollow:2},expectedOutput_2_2);
}

//----------------------------- Alternating line Rectangle ------------------------------//
{
  let expectedOutput_2_2 =  "**\n";
  expectedOutput_2_2 +=     "--";

  testRectangle({type: "alternating",width: 2,height: 2},expectedOutput_2_2);

  let expectedOutput_5_5 = "*****\n";
  expectedOutput_5_5 +=    "-----\n";
  expectedOutput_5_5 +=    "*****\n";
  expectedOutput_5_5 +=    "-----\n";
  expectedOutput_5_5 +=    "*****";

  testRectangle({type: "alternating",width: 5,height: 5},expectedOutput_5_5);

  let expectedOutput_20_7 = "********************\n";
  expectedOutput_20_7 +=    "--------------------\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "--------------------\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "--------------------\n";
  expectedOutput_20_7 +=    "********************";

  testRectangle({type: "alternating",width: 20, height: 7},expectedOutput_20_7);

  let expectedOutput_3_3 =  "***\n";
  expectedOutput_3_3 +=     "---\n";
  expectedOutput_3_3 +=     "***";

  testRectangle({type: "alternating",width: 3,height: 3},expectedOutput_3_3);
}

//-------------------------------- Test cases for diamond pattern -------------------------//

const testDiamond = function (diamondArgs, expectedOutput){
  assert.equal(generateDiamond(diamondArgs), expectedOutput);
}

//----------------------------- Filled Diamond ------------------------------//
{
  let expectedOutput_5 = "  *  \n";
  expectedOutput_5 +=    " *** \n";
  expectedOutput_5 +=    "*****\n";
  expectedOutput_5 +=    " *** \n";
  expectedOutput_5 +=    "  *  ";

  testDiamond({type: "filled", width: 5},expectedOutput_5);

  let expectedOutput_3 = " * \n";
  expectedOutput_3 +=    "***\n";
  expectedOutput_3 +=    " * ";

  testDiamond({type: "filled",width: 3},expectedOutput_3);

  let expectedOutput_4 = " * \n";
  expectedOutput_4 +=    "***\n";
  expectedOutput_4 +=    " * ";

  testDiamond({type: "filled",width: 4},expectedOutput_4);

  let expectedOutput_7 = "   *   \n";
  expectedOutput_7 +=    "  ***  \n";
  expectedOutput_7 +=    " ***** \n";
  expectedOutput_7 +=    "*******\n";
  expectedOutput_7 +=    " ***** \n";
  expectedOutput_7 +=    "  ***  \n";
  expectedOutput_7 +=    "   *   ";

  testDiamond({type: "filled",width: 7},expectedOutput_7);
}

//----------------------------- Hollow Diamond ------------------------------//
{
  let expectedOutput_5 = "  *  \n";
  expectedOutput_5 +=    " * * \n";
  expectedOutput_5 +=    "*   *\n";
  expectedOutput_5 +=    " * * \n";
  expectedOutput_5 +=    "  *  ";

  testDiamond({type: "hollow",width: 5},expectedOutput_5);

  let expectedOutput_3 = " * \n";
  expectedOutput_3 +=    "* *\n";
  expectedOutput_3 +=    " * ";

  testDiamond({type: "hollow",width: 3},expectedOutput_3);

  let expectedOutput_7 = "   *   \n";
  expectedOutput_7 +=    "  * *  \n";
  expectedOutput_7 +=    " *   * \n";
  expectedOutput_7 +=    "*     *\n";
  expectedOutput_7 +=    " *   * \n";
  expectedOutput_7 +=    "  * *  \n";
  expectedOutput_7 +=    "   *   ";

  testDiamond({type: "hollow",width: 7},expectedOutput_7);
}

//----------------------------- Angled Diamond ------------------------------//
{
  let expectedOutput_5 = "  *  \n";
  expectedOutput_5 +=    " / \\ \n";
  expectedOutput_5 +=    "*   *\n";
  expectedOutput_5 +=    " \\ / \n";
  expectedOutput_5 +=    "  *  ";

  testDiamond({type: "angled",width: 5},expectedOutput_5);

  let expectedOutput_3 = " * \n";
  expectedOutput_3 +=    "* *\n";
  expectedOutput_3 +=    " * ";

  testDiamond({type: "angled",width: 3},expectedOutput_3);

  let expectedOutput_7 = "   *   \n";
  expectedOutput_7 +=    "  / \\  \n";
  expectedOutput_7 +=    " /   \\ \n";
  expectedOutput_7 +=    "*     *\n";
  expectedOutput_7 +=    " \\   / \n";
  expectedOutput_7 +=    "  \\ /  \n";
  expectedOutput_7 +=    "   *   ";

  testDiamond({type: "angled",width: 7},expectedOutput_7);
}

//-------------------------------- Test cases for triangle pattern -------------------------//

const testTriangle = function(patternArgs,expectedOutput){
  assert.equal(generateTriangle(patternArgs), expectedOutput);
}

//----------------------------- Left Triangle Pattern ------------------------------//
{
  let expectedOutput_3 = "*\n";
  expectedOutput_3 +=    "**\n";
  expectedOutput_3 +=    "***";

  testTriangle({type: "left",width: 3},expectedOutput_3);

  let expectedOutput_4 = "*\n";
  expectedOutput_4 +=    "**\n";
  expectedOutput_4 +=    "***\n";
  expectedOutput_4 +=    "****";

  testTriangle({type: "left",width: 4},expectedOutput_4);

  let expectedOutput_5 = "*\n";
  expectedOutput_5 +=    "**\n";
  expectedOutput_5 +=    "***\n";
  expectedOutput_5 +=    "****\n";
  expectedOutput_5 +=    "*****";

  testTriangle({type: "left", width: 5},expectedOutput_5);

  let expectedOutput_6 = "*\n";
  expectedOutput_6 +=    "**\n";
  expectedOutput_6 +=    "***\n";
  expectedOutput_6 +=    "****\n";
  expectedOutput_6 +=    "*****\n";
  expectedOutput_6 +=    "******";

  testTriangle({type: "left", width: 6},expectedOutput_6);
}

//----------------------------- Right Triangle Pattern ------------------------------//
{
  let expectedOutput_3 = "  *\n";
  expectedOutput_3 +=    " **\n";
  expectedOutput_3 +=    "***";

  testTriangle({type: "right", width: 3},expectedOutput_3);

  let expectedOutput_4 = "   *\n";
  expectedOutput_4 +=    "  **\n";
  expectedOutput_4 +=    " ***\n";
  expectedOutput_4 +=    "****";

  testTriangle({type: "right", width: 4},expectedOutput_4);

  let expectedOutput_5 = "    *\n";
  expectedOutput_5 +=    "   **\n";
  expectedOutput_5 +=    "  ***\n";
  expectedOutput_5 +=    " ****\n";
  expectedOutput_5 +=    "*****";

  testTriangle({type: "right",width: 5},expectedOutput_5);

  let expectedOutput_6 = "     *\n";
  expectedOutput_6 +=    "    **\n";
  expectedOutput_6 +=    "   ***\n";
  expectedOutput_6 +=    "  ****\n";
  expectedOutput_6 +=    " *****\n";
  expectedOutput_6 +=    "******";

  testTriangle({type: "right", width: 6},expectedOutput_6);
}
console.log("All tests passed");
