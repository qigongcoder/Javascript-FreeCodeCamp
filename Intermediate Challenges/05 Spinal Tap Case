/*
Convert a string to spinal case.
Spinal case is all-lowercase-words-joined-by-dashes.
*/


let Str1='This Is Spinal Tap';
let Str2 ="thisIsSpinalTap";
let Str3="The_Andy_Griffith_Show";
let Str4 ="Teletubbies say Eh-oh";
let Str5="AllThe-small Things";

function doStuff(str){

    let start=str.slice(0,1).toUpperCase();
    let str2=str.replace(/\w/,start);

    let str3=str2.match(/([A-Z]|\s|_|-)[a-z]*/g);

    let str4=str3.filter(x=>(x!='_')&&(x!=' '));

    let str5=[];
    str4.forEach((x,i)=>str5[i]=x.toLowerCase());
    
    let str6=str5.join('-');

    let str7=str6.replace(/[^a-z][^a-z]/g,'-');

    return str7;
}

console.log(doStuff(Str1));
console.log(doStuff(Str2));
console.log(doStuff(Str3));
console.log(doStuff(Str4));
console.log(doStuff(Str5));
