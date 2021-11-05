/*
The every method works with arrays to check if every element passes a particular test.
It returns a Boolean value - true if all values meet the criteria, false if not.

checkPositive([1, 2, 3, -4, 5]) should return false.
checkPositive([1, 2, 3, 4, 5]) should return true.
checkPositive([1, -2, 3, -4, 5]) should return false.
*/


function checkPositive(arr) {
    return arr.every(x=>x>-1);
}

checkPositive([1, 2, 3, -4, 5]);
