/*
Check if the predicate (second argument) is truthy on all elements
of a collection (first argument).
*/

function truthCheck(collection, pre) {
    return !collection.map(x=>!!x[pre]).some(x=>x==false);
}function truthCheck(collection, pre) {
    return !collection.map(x=>!!x[pre]).some(x=>x==false);
}


truthCheck([
    {"user": "Tinky-Winky", "sex": "male"},
    {"user": "Dipsy", "sex": "male"},
    {"user": "Laa-Laa", "sex": "female"},
    {"user": "Po", "sex": "female"}],
    "sex");

truthCheck([
    {"user": "Tinky-Winky", "sex": "male"},
    {"user": "Dipsy"},
    {"user": "Laa-Laa", "sex": "female"},
    {"user": "Po", "sex": "female"}],
    "sex");
