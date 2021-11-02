/*
The DNA strand is missing the pairing element. Take
each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing
element to the provided character.Return the provided
character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair are paired up in an array, and
all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {

  let ele=str.split('');

  let ans=[[]];
  for(let i=0;i<str.length;i++){
    ans[i]=[];
  }


  function insert(e,i){
    if(e=='G'){
        ans[i][0]='G';
        ans[i][1]='C';        
    }
    if(e=='C'){
        ans[i][0]='C';
        ans[i][1]='G';        
    }
    if(e=='A'){
        ans[i][0]='A';
        ans[i][1]='T';        
    }
    if(e=='T'){
        ans[i][0]='T';
        ans[i][1]='A';        
    }
  }

  ele.forEach(insert);
  
  return ans;
}

pairElement("GCG");
