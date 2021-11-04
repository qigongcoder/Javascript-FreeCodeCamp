/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {

  //sums actual chars in string
  let sumofstr=0;
  for(let i=0;i<str.length;i++){
    sumofstr=sumofstr+str.charCodeAt(i);
  }

  //sums theoretical chars in string
  let startValue=str.charCodeAt(0);
  let endValue=str.charCodeAt(str.length-1);
  let theorysum=((endValue-startValue)+1)*(startValue+endValue)/2;

  if(theorysum-sumofstr==0){
    return undefined;
  }

  return (String.fromCharCode(theorysum-sumofstr));
  
}

fearNotLetter("abce");
