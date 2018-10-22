const generatePattern = function (num,character) {
  let line = "";
  for(index=0; index<num; index++) {
    line = line + character;
  }
  return line;
}

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

let alignment = process.argv[2];
let height = process.argv[3];
let triangle  = ""; 

if(alignment.toLowerCase() == "left") {
  triangle = createLeftTriangle(height);
}

if(alignment.toLowerCase() == "right") {
  triangle = createRightTriangle(height);
}

console.log(triangle);


