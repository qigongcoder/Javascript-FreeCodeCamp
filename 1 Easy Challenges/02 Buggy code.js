/*
Run the code in the editor. It's using a method that has side effects
in the program, causing incorrect output. The final list of
open tabs should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium',
'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail',
'Docs', 'freeCodeCamp', 'new tab'] but the output will be slightly different.

Work through the code and see if you can figure out the problem,
then advance to the next challenge to learn more.
*/


var Window=function(tabs){
    this.tabs=tabs;
};

Window.prototype.join=function(otherWindow){
    this.tabs=this.tabs.concat(otherWindow.tabs);
    return this;
};

Window.prototype.tabOpen = function (tab){
    this.tabs.push('new tab');
    return this;
};

Window.prototype.tabClose = function(index){
    var tabsBeforeIndex=this.tabs.splice(0,index);
    var tabsAfterIndex = this.tabs.splice(index);
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
    return this;
};

var workWindow = new Window(['GMail','Inbox','Work mail','Docs','freeCodeCamp']);
var socialWindow = new Window(['FB','Gitter','Reddit','Twitter','Medium']);
var videoWindow = new Window(['Netflix','YouTube','Vimeo','Vine']);

var finalTabs = socialWindow.tabOpen().join(videoWindow.tabClose(2)).join(workWindow.tabClose(1).tabOpen());
