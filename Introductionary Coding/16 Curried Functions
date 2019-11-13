/*
The arity of a function is the number of arguments it requires.
Currying a function means to convert a function of N arity into N functions of arity 1.
In other words, it restructures a function so it takes one argument,
then returns another function that takes the next argument, and so on.

add(10)(20)(30) should return 60.
add(1)(2)(3) should return 6.
add(11)(22)(33) should return 66.
*/

function add(x) {
  return(
    function(y){
      return(
        function(z){
          return x+y+z;
        }
      )
    }
  )

}
add(10)(20)(30);
