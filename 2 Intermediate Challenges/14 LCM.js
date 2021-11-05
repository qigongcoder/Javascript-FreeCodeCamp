/*
Find the smallest common multiple of the provided
parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between
these parameters.The range will be an array
of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common
multiple of both 1 and 3 that is also evenly divisible by
all numbers between 1 and 3. The answer here would be 6.
*/

let primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

function smallestCommons(arr) {
    arr.sort((a,b)=>a-b);

    let list=new Array(arr[1]-arr[0]+1);
    list=list.fill(0,0,list.length).map((x,i)=>x=i+arr[0]);

    function primeFactors (num){
        let ans=[0,0,0,0,0,0,0,0,0,0];
        for(let i=0;i<primeArray.length;i++){
            while(!(num%primeArray[i])){
                num=num/primeArray[i];
                ans[i]++;
            }
        }
        return ans;
    }

    let allFactors=list.map(x=>primeFactors(x));

    let highPrime=[0,0,0,0,0,0,0,0,0,0];
    function highestP (value,index){
        let highP=0;
        for(let i=0;i<(arr[1]-arr[0]+1);i++){
            if(allFactors[i][index]>highP){
                highP=allFactors[i][index];
            }
        }
        return highP;
    }

    highPrime=highPrime.map(highestP);

    function red(acc,cur,ind){
        if(highPrime[ind]!=0){
            return acc*(Math.pow(primeArray[ind],highPrime[ind]));
        }else{
            return acc;
        }
    }

    var ini = 1;
    var ans = highPrime.reduce(red,ini);

    console.log(ans);

}


smallestCommons([1, 5]);
smallestCommons([5, 1]);
smallestCommons([2, 10]);
smallestCommons([1, 13]);
smallestCommons([23, 18]);
