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