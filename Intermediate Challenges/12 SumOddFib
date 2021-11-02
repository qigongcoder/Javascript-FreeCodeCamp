/*
Given a positive integer num, return the sum of all odd
Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1.
Every additional number in the sequence is the sum of
the two previous numbers. The first six numbers of
the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all
odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/


function sumFibs(num) {

    if(num==0){return 0};
    if(num==1){return 1};
    if(num==2){return 1};

    let pre=1;
    let curr=1;
    let next=2;
    let sumodd=1;

    while(curr<=num){
        if(curr%2){
            sumodd+=curr;
        }
        next=pre+curr;
        pre=curr;
        curr=next;
    }   

    return (sumodd);
  
}
