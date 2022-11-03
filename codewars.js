// Sum Numbers
function sum (numbers) {
    "use strict";
    var sum = 0;
    for(const i of numbers){
      sum +=i;
    }
    if(numbers.length == 0)
      return 0;
    return sum;
};


function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i + i;
}


function digitize(n) {
  //code here
    var b = 0;
    var arr = [];
    if(n == 0)
      arr = [0];
    else{
      while(n > 0)
      {
        b = n % 10;
        arr.push(b);
        n = parseInt(n / 10);
      }
    }
  return arr;
}


function paperwork(n, m) {
  if(n < 0 || m < 0)
    return 0;
  else
    return n * m;
}


function repeatStr (n, s) {
  var str = "";
  for(let i = 0; i < n; i++)
    str += s;
  return str;
}