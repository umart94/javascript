// window object

// show message
function ShowMessage(msg) {
	document.getElementById("message").innerHTML += "<p>"+msg+"</p>";
}


function alert(msg) {
	ShowMessage("message is == "+msg);
}

var x = "Hello World from variable inside js file";
//window.alert("Alert");
window.alert(window.x);
ShowMessage("window.name: "+window.name);//the name assigned to the window
ShowMessage("window.innerWidth: "+window.innerWidth);//width of window not counting toolbars or scrollbars
ShowMessage("window.innerHeight: "+window.innerHeight);
ShowMessage("window.outerWidth: "+window.outerWidth);//width and height of the whole browser window
ShowMessage("window.outerHeight: "+window.outerHeight);
ShowMessage("window.screenX: "+window.screenX);//location of the window on screen
ShowMessage("window.screenY: "+window.screenY);

window.scrollTo(0, 100);
ShowMessage("window.pageXOffset: "+window.pageXOffset);
ShowMessage("window.pageYOffset: "+window.pageYOffset);

var n = window.prompt("What is your name?");
ShowMessage("Hello "+n);

// print dialog
// window.print();

// open a new window
var win = window.open("", "newwin", "width=300,height=300,menubar=0,toolbar=0,resizable=0,screenX=2000,screenY=200");

win.document.body.innerHTML = "<p>Hello World!</p>";