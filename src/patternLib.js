const generatePattern = function (width,character) {
  let rectangle = "";
  for(let column=0; column<width; column++) {
    rectangle = rectangle + character;
  }
  return rectangle;
}

const createFilledRect = function(width,height) {
  let rectangle = "";
  let delimeter = "";
  for(let row=0; row<height; row++) {
    rectangle += delimeter +  generatePattern(width,"*");
    delimeter = "\n";
  }
  return rectangle;
}

const createEmptyRect = function (width,height) {
  let rectangle = "";
  let delimeter = "";
  rectangle += delimeter + generatePattern(width,"*");
  delimeter = "\n";
  for(let row=1; row<height-1; row++) {
    rectangle += delimeter + "*" + generatePattern(width-2," ") + "*";
  }
  rectangle += delimeter + generatePattern(width,"*") ;
  return rectangle;
}

const createAlternateRect = function(width,height) {
  let delimeter = "";
  let rectangle = "";
  for(let row=0; row<height; row++) {
    symbol= "-";
    if(row%2 == 0) {
      symbol= "*";
    } 
    rectangle += delimeter + generatePattern(width,symbol) ;
    delimeter = "\n";
  }
  return rectangle;
}

const generateRectangle = function(kindOfRectangle,width,height){
  let rectangle = "";

  if(kindOfRectangle.toLowerCase()  == "filled") {
    rectangle = createFilledRect(width,height);
  }

  if(kindOfRectangle.toLowerCase()  == "empty") {
    rectangle = createEmptyRect(width,height);
  }

  if(kindOfRectangle.toLowerCase()  == "alternating") {
    rectangle = createAlternateRect(width,height);
  }

  return rectangle;
}
//-------------rectangleEnd----------------//
const upperPartOfFilled = function (height) {
  let line = "";
  let delimeter = "";
  let symbol = "*";
  for(let row=height/2; row>0; row--) {
    line += delimeter + generatePattern(row-1," ") + symbol;
    delimeter = "\n";
    symbol += "**";
  }
  return line;
}

const createFilledDiamond = function (height) {
  let delimeter = "\n";
  let line = upperPartOfFilled(height);
  let len = (height-2);
  for(let row=0; row<(height-1)/2; row++) {
    line += delimeter + generatePattern(row+1," ")+generatePattern(len,"*");
    len -= 2;
  }
  let diamond = line;
  return diamond;
}

const upperPartOfHollow =function (height) {
  let line = "";
  let delimeter = "";
  let symbol = " ";
  let row = Math.floor(height/2);
  line += delimeter + generatePattern(row," ") + "*";
  for(let row=Math.ceil(height/2)-1; row>0; row--) {
    delimeter = "\n";
    line += delimeter + generatePattern(row-1," ") +"*"+ symbol+"*";
    symbol+="  ";
  }
  return line;
}

const createHollowDiamond = function(height) {
  let delimeter = "\n";
  let line = upperPartOfHollow(height);
  let len = height - 2;
  for(let row=1; row<Math.ceil(height/2)-1; row++) {
    len -= 2;
    line += delimeter + generatePattern(row," ")+"*"+generatePattern(len," ")+"*";
  }
  line += delimeter + generatePattern(Math.floor(height/2)," ") + "*";
  let diamond = line;
  return diamond;
}

const upperPartOfAngled = function (height) {
  let line = "";
  let delimeter = "";
  let symbol = " ";
  let row = Math.floor(height/2);
  line += delimeter + generatePattern(row," ") + "*";
  delimeter = "\n";
  for(let row=(Math.floor(height/2))-1; row>0; row--) {
    line += delimeter + generatePattern(row," ") +"/"+ symbol+"\\";
    symbol += "  ";
  }
  if(height>1) {
    line += delimeter + generatePattern(0," ") +"*"+ symbol+"*";
  }
  return line;
}

const createAngledDiamond = function(height) {
  let line = upperPartOfAngled(height);
  let delimeter = "\n";
  let len = height-2;
  for(let row=1; row<(height/2)-1; row++) {
    len -= 2;
    line += delimeter + generatePattern(row," ")+"\\"+generatePattern(len," ")+"/";
  }
  line += delimeter + generatePattern(Math.floor(height/2)," ") + "*";
  let diamond = line;
  return diamond;
}

const generateDiamond = function (kindOfDiamond,height) {
  let diamond  = "";
  if(height %2 == 0) {
    height--
  }
  if(kindOfDiamond.toLowerCase() == "filled"){
    diamond = createFilledDiamond(height);
  }
  if(kindOfDiamond.toLowerCase() == "hollow") {
    diamond = createHollowDiamond(height);
  }
  if(kindOfDiamond.toLowerCase() == "angled") {
    diamond=createAngledDiamond(height);
  }
    return diamond;
}
          //-----------diamondEnd--------------//

const createLeftTriangle = function(height) {
  let line = "";
  let delimeter = "";
  for(row=0; row<height; row++) {
    line += delimeter + generatePattern(row+1,"*");
    delimeter = "\n"
  }
  return line;
}

const createRightTriangle = function (height) {
  let line = "";
  let delimeter = "";
  for(let row=height; row>0; row--) {
    line += delimeter + generatePattern(row-1," ");
    line += generatePattern(height-row+1,"*");
    delimeter = "\n";
  }
  return line;
}

function generateTriangle(alignment,height){
  let triangle = "";
  if(alignment.toLowerCase() == "left") {
    triangle = createLeftTriangle(height);
  }

  if(alignment.toLowerCase() == "right") {
    triangle = createRightTriangle(height);
  }
  return triangle;
}
  //------------------triangleEnd-------------------//
  module.exports = {generateDiamond,generateRectangle,generateTriangle};
