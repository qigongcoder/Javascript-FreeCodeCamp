
/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the
sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers
between 1 and 4 (both inclusive) is 10.
*/


function sumAll(arr) {
    let x=arr[0];
    let y=arr[1];
    if(y<x){
        x=arr[1];
        y=arr[0];
    }

    let sum=0;
    
    while(x<y){
        sum=sum+x;
        x++;
    }

  return sum+y;
}

sumAll([1, 4]);
