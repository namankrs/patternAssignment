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
  let upperDiamond = [];
  let symbol = "*";
  for(let row=width/2; row>0; row--) {
    upperDiamond.push(repeatCharacter(row-1," ") + symbol + repeatCharacter(row-1," ")) ;
    symbol += "**";
  }
  return upperDiamond;
}

const createFilledDiamond = function (width) {
  let diamond = upperPartOfFilled(width);
  let len = (width-2);
  for(let row=0; row<(width-1)/2; row++) {
    diamond.push(repeatCharacter(row+1," ")+repeatCharacter(len,"*") + repeatCharacter(row+1," "));
    len -= 2;
  }
  return diamond;
}

const upperPartOfHollow =function (width) {
  let diamond = [];
  let symbol = " ";
  let row = Math.floor(width/2);
  diamond.push(repeatCharacter(row," ") + "*" + repeatCharacter(row," "));
  for(let row=Math.ceil(width/2)-1; row>0; row--) {
   diamond.push(repeatCharacter(row-1," ") +"*"+ symbol+"*" + repeatCharacter(row-1," "));
    symbol+="  ";
  }
  return diamond;
}

const createHollowDiamond = function(width) {
  let diamond = upperPartOfHollow(width);
  let len = width - 2;
  for(let row=1; row<Math.ceil(width/2)-1; row++) {
    len -= 2;
    diamond.push(repeatCharacter(row," ")+"*"+repeatCharacter(len," ")+"*" + repeatCharacter(row," "));
  }
  diamond.push(repeatCharacter(Math.floor(width/2)," ") + "*" + repeatCharacter(Math.floor(width/2)," "));
  return diamond;
}

const upperPartOfAngled = function (width) {
  let diamond = [];
  let symbol = " ";
  let row = Math.floor(width/2);
  diamond.push(repeatCharacter(row," ") + "*" + repeatCharacter(row," "));
  for(let row=(Math.floor(width/2))-1; row>0; row--) {
    diamond.push(repeatCharacter(row," ") +"/"+ symbol+"\\" + repeatCharacter(row," "));
    symbol += "  ";
  }
  if(width>1) {
    diamond.push(repeatCharacter(0," ") +"*"+ symbol+"*" + repeatCharacter(0," "));
  }
  return diamond;
}

const createAngledDiamond = function(width) {
  let diamond = upperPartOfAngled(width);
  let len = width - 2;
  for(let row=1; row<(width/2)-1; row++) {
    len -= 2;
    diamond.push(repeatCharacter(row," ")+"\\"+repeatCharacter(len," ")+"/" + repeatCharacter(row," "));
  }
  diamond.push(repeatCharacter(Math.floor(width/2)," ") + "*" + repeatCharacter(Math.floor(width/2)," "));
  return diamond;
}

const generateDiamond = function (patternArgs) {
  let {type,width} = patternArgs;
  let diamond  = "";
  if(width %2 == 0) {
    width--
  }
  if(type.toLowerCase() == "filled"){
    diamond = createFilledDiamond(width).join("\n");
  }
  if(type.toLowerCase() == "hollow") {
    diamond = createHollowDiamond(width).join("\n")
  }
  if(type.toLowerCase() == "angled") {
    diamond=createAngledDiamond(width).join("\n");
  }
    return diamond;
}
          //-----------diamondEnd--------------//

const createLeftTriangle = function(width) {
  let triangle = [];
  for(row=0; row<width; row++) {
    triangle.push(repeatCharacter(row+1,"*") +repeatCharacter(width-(row+1)," "));
  }
  return triangle;
}

const createRightTriangle = function (width) {
  let triangle = [];
  for(let row=width; row>0; row--){
    triangle.push(repeatCharacter(row-1," ") + repeatCharacter(width-row+1,"*"));
  }
  return triangle;
}

function generateTriangle(patternArgs){
  let {type,width} = patternArgs;
  let triangle = "";
  if(type.toLowerCase() == "left") {
    triangle = createLeftTriangle(width).join("\n");
  }

  if(type.toLowerCase() == "right") {
    triangle = createRightTriangle(width).join("\n");
  }
  return triangle;
}
  //------------------triangleEnd-------------------//
  module.exports = {generateDiamond,generateRectangle,generateTriangle}; 
