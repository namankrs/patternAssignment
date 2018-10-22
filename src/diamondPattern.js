const generatePattern = function (length,character) {
  let line = "";
  for(index=0; index<length; index++) {
    line = line + character;
  }
  return line;
}

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
exports.generateDiamond = generateDiamond;

function main(){
let kindOfDiamond = process.argv[2];
let height = process.argv[3];
console.log(generateDiamond(kindOfDiamond,height));
}

main();
