/*
Refactor (rewrite) the code so the global array bookList is
not changed inside either function. The add function should
add the given bookName to the end of an array. The remove function
should remove the given bookName from an array. Both functions
should return an array, and any new parameters should be added before the bookName one.

newBookList should equal ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].
newerBookList should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
newestBookList should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]
*/


var bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae"
];

function add (bookList,bookName) {
    var locallist = JSON.parse(JSON.stringify(bookList));    
    locallist.push(bookName);    
    return locallist;
}

function remove (bookList,bookName) {
    var locallist = JSON.parse(JSON.stringify(bookList));
    if (locallist.indexOf(bookName) >= 0) {
        locallist.splice(locallist.indexOf(bookName), 1);
        return locallist;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
