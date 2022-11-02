// Setup
const myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
// Only change code below this line


// Setup
const myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
// Only change code below this line


// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
// Only change code below this line


const myList = [];
for(let i = 0; i < 5; i++)
{
  myList.push(["Bread", i]);
}


function reusableFunction () {
  console.log("Hi World");
}
reusableFunction ();


function functionWithArgs (a, b) {
  console.log(a + b);
}
functionWithArgs (3, 5);


function timesFive (n){
  return n*5;
}


// Declare the myGlobal variable below this line

const myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


function myLocalScope() {
  // Only change code below this line
  const myVar = 5;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();


// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum +=5;
}

// Only change code above this line

addThree();
addFive();