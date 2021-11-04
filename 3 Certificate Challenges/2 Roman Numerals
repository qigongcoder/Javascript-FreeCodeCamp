/*
Roman Numeral Converter
*/
function convertToRoman(num) {

    let units=["","I","II","III","IV","V","VI","VII","VIII","IX"];
    let tens=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    let huns=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    let thou=["","M","MM","MMM"];

    let ans=num.toString().split('');

    console.log(ans.length);
    console.log(ans);

    while (ans.length<4){
        ans.unshift('0');
    }
    console.log(ans);    


    console.log(thou[ans[0]]+huns[ans[1]]+tens[ans[2]]+units[ans[3]]);

    return thou[ans[0]]+huns[ans[1]]+tens[ans[2]]+units[ans[3]];
 
}


console.log(convertToRoman(1));
//should return "XLIV"


convertToRoman(16);
//should return "XVI"


convertToRoman(649);
//should return "DCXLIX"


convertToRoman(2014);
//should return "MMXIV"

