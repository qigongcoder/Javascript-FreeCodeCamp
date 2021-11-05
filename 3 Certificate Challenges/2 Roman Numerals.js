/*
Roman Numeral Converter
*/
function convertToRoman(num) {

    let units=["","I","II","III","IV","V","VI","VII","VIII","IX"];
    let tens=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    let huns=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    let thou=["","M","MM","MMM"];

    let ans=num.toString().split('');

    while (ans.length<4){
        ans.unshift('0');
    }
    return thou[ans[0]]+huns[ans[1]]+tens[ans[2]]+units[ans[3]];
 
}


convertToRoman(1);

convertToRoman(16);

convertToRoman(649);

convertToRoman(2014);
