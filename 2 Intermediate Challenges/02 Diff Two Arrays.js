/*
Compare two arrays and return a new array with any items only found
in one of the two given arrays, but not both. In other words, return
the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
    var newArr = [];

    let ar1true=arr1.map(x=>1);
    let ar2true=arr2.map(x=>1);
  
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            ar1true[i]=0;
            ar2true[j]=0;
        }
    }
  }

    function testandcopy1(x,i){
        if(x==1){
            newArr.push(arr1[i]);
        }
    }

    function testandcopy2(x,i){
        if(x==1){
            newArr.push(arr2[i]);
        }
    }

    ar1true.forEach(testandcopy1);
    ar2true.forEach(testandcopy2);


  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
