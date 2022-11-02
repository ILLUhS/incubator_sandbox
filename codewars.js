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