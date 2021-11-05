/*
Fill in the urlSlug function so it converts a string title and returns the hyphenated
version for the URL. You can use any of the methods covered in this section, and don't use replace

urlSlug("Winter Is Coming") should return "winter-is-coming".
urlSlug(" Winter Is  Coming") should return "winter-is-coming".
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return "a-mind-needs-books-like-a-sword-needs-a-whetstone".
urlSlug("Hold The Door") should return "hold-the-door"
*/


// the global variable
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title.toLowerCase().split(' ').filter(x=>x!="").join('-');  
}

var winterComing = urlSlug(globalTitle);
