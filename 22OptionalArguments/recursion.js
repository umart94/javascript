// My JavaScript Module
var Lib = Lib || {};

Lib.Array = (function() {

	// define output element
	var element = document.getElementById("message");

	// loop through an array
	function Recurse(a) {
	
		//check if value passed is an array, loop through array, pass through recurse function, return it.
		if (a.constructor == Array) {
			for (var i = 0; i < a.length; i++) {
				Recurse(a[i]);//exit condition is i < a.length
			}
		}
		else element.innerHTML += a + "<br />";
	
	}

	return {
		Recurse: Recurse
	};

}());