/*
Create a function that sums two arguments together.
If only one argument is provided, then return a function
that expects one argument and returns the sum.
*/

function addTogether() {

  if(typeof(arguments[0])!="number"){
    return undefined;
  }

  if(typeof(arguments[1])=="number"){
    return arguments[0]+arguments[1];
  }

  if(typeof(arguments[1])=="string"){
    return undefined;
  }

  let pass=arguments[0];
 
  function argh(x){
    if(typeof(x)!="number"){
      return undefined;
    }else{
      return x+pass;
    }
  }

  return argh;
}

addTogether(2, 3);

addTogether(2)(3);

addTogether("http://bit.ly/IqT6zt");

addTogether(2, "3");

addTogether(2)([3]);
