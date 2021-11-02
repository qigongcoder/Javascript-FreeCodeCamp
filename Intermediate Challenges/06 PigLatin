/*
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or
consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
Translate the provided string to Pig Latin. Input strings
are guaranteed to be English words in all lowercase.
*/


function translatePigLatin (str){

    let regEx=/^[aeiou]/;
        
    if(regEx.test(str)){
        str=str.concat('way');
        return str;
    }

    str=str.replace(/([^aeiou]*)([\w]*)/,"$2$1").concat('ay');

    return str;
}


translatePigLatin("california");
//should return "aliforniacay".
translatePigLatin("paragraphs")
//should return "aragraphspay".
translatePigLatin("glove")
//should return "oveglay".
translatePigLatin("algorithm")
//should return "algorithmway".
translatePigLatin("eight")
//should return "eightway".
