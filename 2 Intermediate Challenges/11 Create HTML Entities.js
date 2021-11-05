/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  
  str=str.replace(/&/g,'&amp;');

  str=str.replace(/</g,'&lt;');

  str=str.replace(/>/g,'&gt;');

  str=str.replace(/"/g,'&quot;');

  str=str.replace(/'/g,'&apos;');
  
  return str;

}

convertHTML("Dolce & Gabbana")
convertHTML("Hamburgers < Pizza < Tacos")
convertHTML("Sixty > twelve")
convertHTML('Stuff in "quotation marks"')
convertHTML("Schindler's List")
convertHTML("<>")
convertHTML("abc")
