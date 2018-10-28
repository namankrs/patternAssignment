const utilLib = require("./patternUtil.js");
let {repeatCharacter} = utilLib;

const createFilledRect = function(width,height) {
  let rectangle = [];
  for(let row=0; row<height; row++) {
    rectangle[row] = repeatCharacter(width,"*");
  }
  return rectangle;
}

const createEmptyRect = function (width,height) {
  let rectangle = [];
  rectangle[0] = repeatCharacter(width,"*");
  for(let row=1; row<height-1; row++) {
    rectangle[row] =  "*" + repeatCharacter(width-2," ") + "*";
  }
  rectangle[height-1] =  repeatCharacter(width,"*") ;
  return rectangle;
}

const createAlternateRect = function(width,height) {
  let rectangle = [];
  for(let row=0; row<height; row++) {
    symbol= "-";
    if(row%2 == 0) {
      symbol= "*";
    } 
    rectangle[row] = repeatCharacter(width,symbol) ;
  }
  return rectangle;
}

const generateRectangle = function(rectArgs){
  let {type,width,height} = rectArgs;

  let rectangle = "";

  if(type.toLowerCase()  == "filled") {
    rectangle = createFilledRect(width,height).join("\n");
  }

  if(type.toLowerCase()  == "hollow") {
    rectangle = createEmptyRect(width,height).join("\n");
  }

  if(type.toLowerCase()  == "alternating") {
    rectangle = createAlternateRect(width,height).join("\n");
  }

  return rectangle;
}
//-------------rectangleEnd----------------//
const upperPartOfFilled = function (width) {
  let line = "";
  let delimeter = "";
  let symbol = "*";
  for(let row=width/2; row>0; row--) {
    line += delimeter + repeatCharacter(row-1," ") + symbol + repeatCharacter(row-1," ") ;
    delimeter = "\n";
    symbol += "**";
  }
  return line;
}

const createFilledDiamond = function (width) {
  let delimeter = "\n";
  let line = upperPartOfFilled(width);
  let len = (width-2);
  for(let row=0; row<(width-1)/2; row++) {
    line += delimeter + repeatCharacter(row+1," ")+repeatCharacter(len,"*") + repeatCharacter(row+1," ");
    len -= 2;
  }
  let diamond = line;
  return diamond;
}

const upperPartOfHollow =function (width) {
  let line = "";
  let delimeter = "";
  let symbol = " ";
  let row = Math.floor(width/2);
  line += delimeter + repeatCharacter(row," ") + "*" + repeatCharacter(row," ");
  for(let row=Math.ceil(width/2)-1; row>0; row--) {
    delimeter = "\n";
    line += delimeter + repeatCharacter(row-1," ") +"*"+ symbol+"*" + repeatCharacter(row-1," ");
    symbol+="  ";
  }
  return line;
}

const createHollowDiamond = function(width) {
  let delimeter = "\n";
  let line = upperPartOfHollow(width);
  let len = width - 2;
  for(let row=1; row<Math.ceil(width/2)-1; row++) {
    len -= 2;
    line += delimeter + repeatCharacter(row," ")+"*"+repeatCharacter(len," ")+"*" + repeatCharacter(row," ");
  }
  line += delimeter + repeatCharacter(Math.floor(width/2)," ") + "*" + repeatCharacter(Math.floor(width/2)," ");
  let diamond = line;
  return diamond;
}

const upperPartOfAngled = function (width) {
  let line = "";
  let delimeter = "";
  let symbol = " ";
  let row = Math.floor(width/2);
  line += delimeter + repeatCharacter(row," ") + "*" + repeatCharacter(row," ");
  delimeter = "\n";
  for(let row=(Math.floor(width/2))-1; row>0; row--) {
    line += delimeter + repeatCharacter(row," ") +"/"+ symbol+"\\" + repeatCharacter(row," ");
    symbol += "  ";
  }
  if(width>1) {
    line += delimeter + repeatCharacter(0," ") +"*"+ symbol+"*" + repeatCharacter(0," ");
  }
  return line;
}

const createAngledDiamond = function(width) {
  let line = upperPartOfAngled(width);
  let delimeter = "\n";
  let len = width-2;
  for(let row=1; row<(width/2)-1; row++) {
    len -= 2;
    line += delimeter + repeatCharacter(row," ")+"\\"+repeatCharacter(len," ")+"/" + repeatCharacter(row," ");
  }
  line += delimeter + repeatCharacter(Math.floor(width/2)," ") + "*" + repeatCharacter(Math.floor(width/2)," ");
  let diamond = line;
  return diamond;
}

const generateDiamond = function (patternArgs) {
  let {type,width} = patternArgs;
  let diamond  = "";
  if(width %2 == 0) {
    width--
  }
  if(type.toLowerCase() == "filled"){
    diamond = createFilledDiamond(width);
  }
  if(type.toLowerCase() == "hollow") {
    diamond = createHollowDiamond(width);
  }
  if(type.toLowerCase() == "angled") {
    diamond=createAngledDiamond(width);
  }
    return diamond;
}
          //-----------diamondEnd--------------//

const createLeftTriangle = function(width) {
  let line = "";
  let delimeter = "";
  for(row=0; row<width; row++) {
    line += delimeter + repeatCharacter(row+1,"*") +repeatCharacter(width-(row+1)," ");
    delimeter = "\n"
  }
  return line;
}

const createRightTriangle = function (width) {
  let line = "";
  let delimeter = "";
  for(let row=width; row>0; row--) {
    line += delimeter + repeatCharacter(row-1," ");
    line += repeatCharacter(width-row+1,"*");
    delimeter = "\n";
  }
  return line;
}

function generateTriangle(patternArgs){
  let {type,width} = patternArgs;
  let triangle = "";
  if(type.toLowerCase() == "left") {
    triangle = createLeftTriangle(width);
  }

  if(type.toLowerCase() == "right") {
    triangle = createRightTriangle(width);
  }
  return triangle;
}
  //------------------triangleEnd-------------------//
  module.exports = {generateDiamond,generateRectangle,generateTriangle}; 
