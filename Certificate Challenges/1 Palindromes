/*
A palindrome is a word or sentence that's spelled the same way both forward and backward,
ignoring punctuation, case, and spacing.
Remove all non-alphanumeric characters (punctuation, spaces and symbols)
everything into the same case (lower or upper case) in order to check for palindromes.

"racecar", "RaceCar", "race CAR", "2A3*3a2", "2A3 3a2", "2_A3*3#A2".
*/

function palindrome(str) {

//remove unnecessary characters
    let reg=/\w/g;
    let ans=str.toLowerCase().match(reg).filter(x=>x!='_');

//if odd length, remove middle character
    if(ans.length%2==1){
        ans.splice(((ans.length+1)/2)-1,1);
    }

//    console.log(ans);

//chop into two strings and reverse one end
    let ansL=ans.slice(0,ans.length/2);
    let ansR=ans.slice(ans.length/2,ans.length).reverse();

//test equality
    let state=true;
    for(let i=0;i<ansL.length;i++){
        if(ansL[i]!=ansR[i]){
            state=false;
        }
    }

//    console.log(state);

    return state;
}

palindrome("eye");
//should return true
palindrome("_eye");
//should return true
palindrome("race car");
//should return true
palindrome("not a palindrome");
//should return false
palindrome("A man, a plan, a canal. Panama");
//should return true
palindrome("never odd or even");
//should return true
palindrome("nope");
//should return false
palindrome("almostomla");
//should return false
palindrome("My age is 0, 0 si ega ym.");
//should return true
palindrome("1 eye for of 1 eye.");
//should return false
palindrome("0_0 (: /-\ :) 0-0");
//should return true
palindrome("five|\_/|four");
//should return false
