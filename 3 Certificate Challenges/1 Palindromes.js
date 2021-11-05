/*
A palindrome is a word or sentence that's spelled the same way both forward and backward,
ignoring punctuation, case, and spacing.
Remove all non-alphanumeric characters (punctuation, spaces and symbols)
everything into the same case (lower or upper case) in order to check for palindromes.

"racecar", "RaceCar", "race CAR", "2A3*3a2", "2A3 3a2", "2_A3*3#A2".
*/

function palindrome(str) {

    let reg=/\w/g;
    let ans=str.toLowerCase().match(reg).filter(x=>x!='_');

    if(ans.length%2==1){
        ans.splice(((ans.length+1)/2)-1,1);
    }

    let ansL=ans.slice(0,ans.length/2);
    let ansR=ans.slice(ans.length/2,ans.length).reverse();

    let state=true;
    for(let i=0;i<ansL.length;i++){
        if(ansL[i]!=ansR[i]){
            state=false;
        }
    }

    return state;
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
