// Cookie library
/*
javascript native cookies have issues, we cannot extract information from them

*/
var Cookie = Cookie || (function() {

	// parse cookies
/*
extract individual cookies from document.cookie
split cookie array with ; character
go through that array and 
split each individual name value pair into another array seperated by = equals sign 

these are then stored in cookieList , a javascript object.
cookieList contains all our cookies as name value pairs.


*/
	var
		cookieList = {},
		ac = document.cookie.split(";"),
		c, i;

	for (i = 0; i < ac.length; i++) {
		c = ac[i].split("=");
		if (c.length > 1) {
			cookieList[c[0].trim()] = unescape(c[1]);
		}
	}


	// set cookie
	/*
	a set method for defining our updated cookies
	set name ,value, expiry ( easier if set to number of minutes) and its path
	
	find expiry date
	take current expiry date
	increase the time for expiry
	set cookieExpiry date

	if there are lots of cookies
	we can set logic that set their dates to past dates
	so that they can be deleted
	and some cookies , set dates to somewhere in future
	so they are not deleted. and otherwise get stored in the cookieList object
	*/
	function Set(name, value, expiry, path) {

		var cookieExpiry = cookiePath = "";

		if (expiry) {
			var date = new Date();
			date.setTime(date.getTime() + expiry * 60000);
			cookieExpiry = "; expires=" + date.toGMTString();
		}

		if (path) {
			cookiePath = "; path=" + path;
		}

		// store cookie
		document.cookie = name + "=" + escape(value) + cookieExpiry + cookiePath;

		// update cookieList
		if (expiry && expiry < 0) {
			// delete cookie
			delete cookieList[name];
		}
		else {
			// add cookie
			cookieList[name] = value;
		}

	}


	// delete a cookie
	// delete cookie pass the name and set it to negative minute
	//cookie is set to immediately expire.
	function Delete(name) {
		Set(name, "", -1);
	}


	// get cookie
	/*
	fetches cookie value from its name , otherwise it returns undefined.

	*/
	function Get(name) {
		return cookieList[name] || undefined;
	}

//code for returing from js module.
	return {
		Set: Set,
		Delete: Delete,
		Get: Get
	};

}());