/*
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first)
setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one
argument and it has to be a string.These methods must be the
only available means of interacting with the object.
*/


var Person = function(firstAndLast){
    let fullarray=firstAndLast.split(' ');
    let first=fullarray[0];
    let last=fullarray[1];

    this.getFirstName = function(){
        return first;
    }

    this.getLastName = function(){
        return last;
    }

    this.getFullName = function(){
        return first.concat(' ',last);
    }

    this.setFirstName = function(x){
        first=x;
    }

    this.setLastName = function(x){
        last=x;
    }

    this.setFullName = function(x){
        fullarray=x.split(' ');
        first=fullarray[0];
        last=fullarray[1];
    }

};


var bob = new Person('Bob Ross');
bob.getFullName();
