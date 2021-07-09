//revealing module pattern.

//js modules group functions and variables such that only one global variable is defined.
// so we cant overwrite global variables.



//My Javascript module
//single global variable called Lib.
//this line says that if lib exists, use that version, else create the Lib variable.

// My JavaScript Module
var Lib = Lib || {};

Lib.Output = (function() {

	// define output element
	var element = document.getElementById("message");
	var color = "#000";

	// write message
	function Write(msg) {
		element.innerHTML += FormatMessage(msg);
	}

	// set color
	function SetColor(col) {
		color = col;
	}

	// clear all messages
	function Clear() {
		element.innerHTML = "";
	}

	// format a number
	function FormatMessage(msg) {
		return '<p style="color:'+color+'">'+msg+'</p>';
	}

	return {
		Write: Write,
		$: Write,
		SetColor: SetColor,
		Clear: Clear
	};

}());