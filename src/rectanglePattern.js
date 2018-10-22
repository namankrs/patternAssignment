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

let kindOfRectangle = process.argv[2];
let width = process.argv[3];
let height = process.argv[4];
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

console.log(rectangle);
