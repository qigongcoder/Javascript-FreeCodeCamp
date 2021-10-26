/*
Flatten a nested array. You must account for varying levels of nesting.
*/


let ans=[];

function remove(x){
    x.forEach(x=>(Array.isArray(x))?remove(x):ans.push(x));
}

function steamrollArray(arr){
    remove(arr);
    let newar=ans;
    ans=[];
    return newar;
}

steamrollArray([[["a"]], [["b"]]]);
//should return ["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]);
//should return [1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]);
//should return [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]);
//should return [1, {}, 3, 4]
