/*
Make a function that looks through an array of objects
(first argument) and returns an array of all objects that
have matching name and value pairs (second argument). Each
name and value pair of the source object has to be
present in the object from the collection if it
is to be included in the returned array.
*/



function whatIsInAName(collection, source) {
    var arr = [];
    var args = Array.prototype.slice.call(arguments);

    //this turns the 0th argument array of Objects to a normal array
    let ar0=[];
    args[0].forEach(x=>ar0.push(Object.entries(x)));
 
    //this create a 2d array that can be accessed
    //which will contain the strings
    let ar0s=[[]];
    for(let i=0;i<args[0].length;i++){
        ar0s[i]=[];
    }

    //this combines the value-key pairs into a single element
    //then puts each into a separate row of ar0s
    for(let i=0;i<ar0.length;i++){
        for(let j=0;j<ar0[i].length;j++){
            ar0s[i].push(ar0[i][j].join('-'));
        }
    }

    //this turns the 1st argument array to a normal array
    let ar1=[];
    ar1=Object.entries(args[1]);
 
    //this create a 1d array, it will contain the strings
    let ar1s=[];

    //this combines the key-value pairs of 1st argument into a single element
    ar1.forEach((x,i)=>ar1s.push(x.join('-')));

    //checks whether all elements in 1st argument are in 
    //the 0th argument
    let test = ar1s.slice(0);
    let j=0;
    while(j<ar0s.length){
        for(let i=0;i<test.length;i++){
            if(ar0s[j].includes(test[i])){
                test.splice(i,1);
                i=-1;
            }
        }
        if(test.length==0){
            arr.push(args[0][j]);
        }
        test = ar1s.slice(0);
        j++;
    }

    return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 },
{ "apple": 1 },
{ "apple": 1, "bat": 2, "cookie": 2 }],
{ "apple": 1, "cookie": 2 }));
