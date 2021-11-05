/*
Write your own Array.prototype.myMap(),
which should behave exactly like Array.prototype.map().
You may use a for loop or the forEach method.

new_s should equal [46, 130, 196, 10].
*/

var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  for(let i=0;i<s.length;i++){
      newArray[i]=callback(s[i]);
  }

  return newArray;

};

var new_s = s.myMap(function(item){return item * 2;});

