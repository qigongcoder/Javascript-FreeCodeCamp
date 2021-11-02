/*
Write a function that takes two or more arrays and
returns a new array of unique values in the order of the original
provided arrays. In other words, all values present
from all arrays should be included in their original
order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order,
but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr) {
  let newArgs=Array.prototype.slice.call(arguments).toString().split(',');

  let numArgs=[];
  function str2num(x,i){
    numArgs[i]=parseInt(x,10);
  }
  newArgs.forEach(str2num);

  function remove(arr){
    let i=0;
    while(i<arr.length){
      if(i!=arr.lastIndexOf(arr[i])){
        arr.splice(arr.lastIndexOf(arr[i]),1);
        i--;
      }
    i++;
    }
  }

  remove(numArgs);
  
  return numArgs;

}


