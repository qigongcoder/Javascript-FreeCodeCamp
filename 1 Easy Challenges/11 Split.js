/*
The split method splits a string into an array of strings.
It takes an argument for the delimiter, which can be a character
to use to break up the string or a regular expression.

splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].
splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].
splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].
*/

function splitify(str) {
  return str.split(/\W/);

}
