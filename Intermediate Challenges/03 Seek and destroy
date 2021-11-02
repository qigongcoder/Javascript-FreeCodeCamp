/*
You will be provided with an initial array (the first argument
in the destroyer function), followed by one or more
arguments. Remove all elements from the initial array
that are of the same value as these arguments.
*/


function destroyer() {

    let arr1=[];
    let arr2=[];

    for(let i=1;i<arguments.length;i++){
        arr2.push(arguments[i])
    }

    arr1=arguments[0];
 
   return arr1.filter(x=>!arr2.includes(x));

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
