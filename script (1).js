var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Geography/World's%20Tallest%20Mountains.csv"
var mountainNames = getColumn(url, 2);
var mountainLocation = getColumn(url, 11);
var parentMountains = getColumn(url, 8);
var heightFeet = getColumn(url, 4);
var heightMeters = getColumn(url, 3);
var mountainRange = getColumn(url, 6);
var ascentYear = getColumn(url, 9);

//takes a mountain name and returns the location
//mountain name {string} - the desired mountain
//return {string} - the location of the mountain
function getLocation(mountainName){
  if(typeof mountainName !="string"){
    return "Please enter a string parameter";
  }
  for(var i in mountainNames){
    if (mountainNames[i].toLowerCase().replaceAll("//s", "").includes(mountainName.toLowerCase().replaceAll("//s", ""))){
     return mountainLocation[i];
    }
  }
   return "that is not a mountain name";
  }
console.log(getLocation("Mana"));
console.log(getLocation("nanga parbat"));
console.log(getLocation(6));
console.log(getLocation("M0untEverest!!!!!!!?????????!?!?!?!!?!?!?!?!?!!?!"));
console.log(getLocation("Mount Everest"));
console.log(getLocation("muz taghata"));

//takes mountain name and returns the parent mountain
//mountain name {string} - the desired mountain
//return {string} - the parent mountain
function getParentMountain(mountainName){
  if(typeof mountainName !="string"){
    return "Please enter a string parameter";
  }
  for(var i in mountainNames){
    if (mountainNames[i].toLowerCase().includes(mountainName.toLowerCase())){
     return parentMountains[i];
    }
  }
   return "that is not a mountain name";
  }
console.log(getParentMountain("Mount Everest"));
console.log(getParentMountain("Mana"));
console.log(getParentMountain("nanga parbat"));
console.log(getParentMountain(6));

//takes a mountain name and returns the height in feet
//mountain name {string} - the desired mountain
//return {number} - the height of mountain

function getHeightInFeet(mountainName){
  if(typeof mountainName !="string"){
    return "Please enter a string parameter";
  }
  for(var i in mountainNames){
    if (mountainNames[i].toLowerCase().includes(mountainName.toLowerCase())){
     return heightFeet[i];
    }
  }
   return "that is not a mountain name";
  }
console.log(getHeightInFeet("Mount Everest"));
console.log(getHeightInFeet("Mana"));
console.log(getHeightInFeet("HiMaLChulI"));
console.log(getHeightInFeet(6));


//takes a range and returns a list of mountain names in that range
//range {string} - the desired range
//return {list} - the names of mountains in the range
function getNamesInRange(range){
  if(typeof range !="string"){
    return "Please enter a string parameter";
  }
  var matches = [];
  for(var i in mountainRange){
    if (mountainRange[i].toLowerCase().includes(range.toLowerCase())){
      matches.push(mountainNames[i]);
    }
  }
  if(matches.length == 0){
    matches.push("No mountains Are in That Division")
  }
  return matches;
}
console.log(getNamesInRange("Baltoro Karakoram"));
console.log(getNamesInRange("Mahalangur"));
console.log(getNamesInRange("manaslu himalaya"));
console.log(getNamesInRange(6));

//finds how many mountains that were ascended before 1950
//return{number} how many mountains were ascended before 1950
function getAscendedBefore(){
  var count = 0;
  for(var i in mountainNames){
    if (1950 > parseInt(ascentYear[i])){
      count ++;
    }
}
  return count;
}
console.log(getAscendedBefore());*/

function  getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }