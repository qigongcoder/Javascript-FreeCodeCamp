/*
The join method is used to join the elements of an array together to create a string.
It takes an argument for the delimiter that is used to separate the array elements in the string.

sentensify("May-the-force-be-with-you") should return a string.
sentensify("May-the-force-be-with-you") should return "May the force be with you".
sentensify("The.force.is.strong.with.this.one") should return "The force is strong with this one".
sentensify("There,has,been,an,awakening") should return "There has been an awakening".
*/

function sentensify(str) {

    let arr=str.split(/\W/);

    return arr.join(" ");

}
sentensify("May-the-force-be-with-you");

