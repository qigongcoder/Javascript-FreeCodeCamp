/*
A side effect of the sort method is that it changes the order of the
elements in the original array. In other words, it mutates the array
in place. One way to avoid this is to first concatenate an empty array
to the one being sorted (remember that concat returns a new array), then run the sort method.

nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9].
*/

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {

  var a = [];
  var b=a.concat(arr);

  return b.sort((a,b)=>a-b);

}


nonMutatingSort(globalArray);
