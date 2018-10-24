const assert = require("assert");
const patternLib = require("../src/patternLib.js");
const {generateRectangle} = patternLib;
const {generateTriangle} = patternLib;
const {generateDiamond} = patternLib;

//-------------------------------- Test cases for rectangle pattern -------------------------//

const testRectangle = function(type,width,height,expectedOutput){
  assert.equal(generateRectangle(type,width,height), expectedOutput);
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

  testRectangle("filled",20,7,expectedOutput_20_7);

  let expectedOutput_5_5 = "*****\n";
  expectedOutput_5_5 +=    "*****\n";
  expectedOutput_5_5 +=    "*****\n";
  expectedOutput_5_5 +=    "*****\n";
  expectedOutput_5_5 +=    "*****";

  testRectangle("filled",5,5,expectedOutput_5_5);

  let expectedOutput_2_2 =  "**\n";
  expectedOutput_2_2 +=     "**";

  testRectangle("filled",2,2,expectedOutput_2_2);

  let expectedOutput_2_3 = "**\n";
  expectedOutput_2_3 +=    "**\n";
  expectedOutput_2_3 +=    "**";

  testRectangle("filled",2,3,expectedOutput_2_3);
}

//----------------------------- Hollow Rectangle ------------------------------//
{
  let expectedOutput_5_5 = "*****\n";
  expectedOutput_5_5 +=    "*   *\n";
  expectedOutput_5_5 +=    "*   *\n";
  expectedOutput_5_5 +=    "*   *\n";
  expectedOutput_5_5 +=    "*****";

  testRectangle("hollow",5,5,expectedOutput_5_5);

  let expectedOutput_20_7 = "********************\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "********************";

  testRectangle("hollow",20,7,expectedOutput_20_7);

  let expectedOutput_2_2 =  "**\n";
  expectedOutput_2_2 +=     "**";

  testRectangle("hollow",2,2,expectedOutput_2_2);
}

//----------------------------- Alternating line Rectangle ------------------------------//
{
  let expectedOutput_2_2 =  "**\n";
  expectedOutput_2_2 +=     "--";

  testRectangle("alternating",2,2,expectedOutput_2_2);

  let expectedOutput_5_5 = "*****\n";
  expectedOutput_5_5 +=    "-----\n";
  expectedOutput_5_5 +=    "*****\n";
  expectedOutput_5_5 +=    "-----\n";
  expectedOutput_5_5 +=    "*****";

  testRectangle("alternating",5,5,expectedOutput_5_5);

  let expectedOutput_20_7 = "********************\n";
  expectedOutput_20_7 +=    "--------------------\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "--------------------\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "--------------------\n";
  expectedOutput_20_7 +=    "********************";

  testRectangle("alternating",20,7,expectedOutput_20_7);

  let expectedOutput_3_3 =  "***\n";
  expectedOutput_3_3 +=     "---\n";
  expectedOutput_3_3 +=     "***";

  testRectangle("alternating",3,3,expectedOutput_3_3);
}

//-------------------------------- Test cases for rectangle pattern -------------------------//

const testDiamond = function (type,height,expectedOutput){
  assert.equal(generateDiamond(type,height), expectedOutput);
}

//----------------------------- Filled Diamond ------------------------------//
{
  let expectedOutput_5 = "  *  \n";
  expectedOutput_5 +=    " *** \n";
  expectedOutput_5 +=    "*****\n";
  expectedOutput_5 +=    " *** \n";
  expectedOutput_5 +=    "  *  ";

  testDiamond("filled",5,expectedOutput_5);

  let expectedOutput_3 = " * \n";
  expectedOutput_3 +=    "***\n";
  expectedOutput_3 +=    " * ";

  testDiamond("filled",3,expectedOutput_3);

  let expectedOutput_4 = " * \n";
  expectedOutput_4 +=    "***\n";
  expectedOutput_4 +=    " * ";

  testDiamond("filled",4,expectedOutput_4);

  let expectedOutput_7 = "   *   \n";
  expectedOutput_7 +=    "  ***  \n";
  expectedOutput_7 +=    " ***** \n";
  expectedOutput_7 +=    "*******\n";
  expectedOutput_7 +=    " ***** \n";
  expectedOutput_7 +=    "  ***  \n";
  expectedOutput_7 +=    "   *   ";

  testDiamond("filled",7,expectedOutput_7);
}

//----------------------------- Hollow Diamond ------------------------------//
{
  let expectedOutput_5 = "  *  \n";
  expectedOutput_5 +=    " * * \n";
  expectedOutput_5 +=    "*   *\n";
  expectedOutput_5 +=    " * * \n";
  expectedOutput_5 +=    "  *  ";

  testDiamond("hollow",5,expectedOutput_5);

  let expectedOutput_3 = " * \n";
  expectedOutput_3 +=    "* *\n";
  expectedOutput_3 +=    " * ";

  testDiamond("hollow",3,expectedOutput_3);

  let expectedOutput_7 = "   *   \n";
  expectedOutput_7 +=    "  * *  \n";
  expectedOutput_7 +=    " *   * \n";
  expectedOutput_7 +=    "*     *\n";
  expectedOutput_7 +=    " *   * \n";
  expectedOutput_7 +=    "  * *  \n";
  expectedOutput_7 +=    "   *   ";

  testDiamond("hollow",7,expectedOutput_7);
}

//----------------------------- Angled Diamond ------------------------------//
{
  let expectedOutput_5 = "  *  \n";
  expectedOutput_5 +=    " / \\ \n";
  expectedOutput_5 +=    "*   *\n";
  expectedOutput_5 +=    " \\ / \n";
  expectedOutput_5 +=    "  *  ";

  testDiamond("angled",5,expectedOutput_5);

  let expectedOutput_3 = " * \n";
  expectedOutput_3 +=    "* *\n";
  expectedOutput_3 +=    " * ";

  testDiamond("angled",3,expectedOutput_3);

  let expectedOutput_7 = "   *   \n";
  expectedOutput_7 +=    "  / \\  \n";
  expectedOutput_7 +=    " /   \\ \n";
  expectedOutput_7 +=    "*     *\n";
  expectedOutput_7 +=    " \\   / \n";
  expectedOutput_7 +=    "  \\ /  \n";
  expectedOutput_7 +=    "   *   ";

  testDiamond("angled",7,expectedOutput_7);
}

//-------------------------------- Test cases for triangle pattern -------------------------//

const testTriangle = function(type,height,expectedOutput){
  assert.equal(generateTriangle(type,height,"*"), expectedOutput);
}

//----------------------------- Left Triangle Pattern ------------------------------//
{
  let expectedOutput_3 = "*\n";
  expectedOutput_3 +=    "**\n";
  expectedOutput_3 +=    "***";

  testTriangle("left",3,expectedOutput_3);

  let expectedOutput_4 = "*\n";
  expectedOutput_4 +=    "**\n";
  expectedOutput_4 +=    "***\n";
  expectedOutput_4 +=    "****";

  testTriangle("left",4,expectedOutput_4);

  let expectedOutput_5 = "*\n";
  expectedOutput_5 +=    "**\n";
  expectedOutput_5 +=    "***\n";
  expectedOutput_5 +=    "****\n";
  expectedOutput_5 +=    "*****";

  testTriangle("left",5,expectedOutput_5);

  let expectedOutput_6 = "*\n";
  expectedOutput_6 +=    "**\n";
  expectedOutput_6 +=    "***\n";
  expectedOutput_6 +=    "****\n";
  expectedOutput_6 +=    "*****\n";
  expectedOutput_6 +=    "******";

  testTriangle("left",6,expectedOutput_6);
}

//----------------------------- Right Triangle Pattern ------------------------------//
{
  let expectedOutput_3 = "  *\n";
  expectedOutput_3 +=    " **\n";
  expectedOutput_3 +=    "***";

  testTriangle("right",3,expectedOutput_3);

  let expectedOutput_4 = "   *\n";
  expectedOutput_4 +=    "  **\n";
  expectedOutput_4 +=    " ***\n";
  expectedOutput_4 +=    "****";

  testTriangle("right",4,expectedOutput_4);

  let expectedOutput_5 = "    *\n";
  expectedOutput_5 +=    "   **\n";
  expectedOutput_5 +=    "  ***\n";
  expectedOutput_5 +=    " ****\n";
  expectedOutput_5 +=    "*****";

  testTriangle("right",5,expectedOutput_5);

  let expectedOutput_6 = "     *\n";
  expectedOutput_6 +=    "    **\n";
  expectedOutput_6 +=    "   ***\n";
  expectedOutput_6 +=    "  ****\n";
  expectedOutput_6 +=    " *****\n";
  expectedOutput_6 +=    "******";

  testTriangle("right",6,expectedOutput_6);
}
console.log("All tests passed");
