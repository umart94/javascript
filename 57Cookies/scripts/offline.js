// offline HTML5 applications
/*
go online
go offline
perform some tasks to create messages in email
go online
perform tasks to send email

to save bandwidth, done in earlier times.

in email example we can use localstorage. and when connectivity returns
we can reattempt sending it.

step1- define a manifest file, with the files that we want to "cache"
when connectivity is lost.

create a manifest file.

specified with CACHE MANIFEST
scripts/js.js
html.html
abcd.css

step2 - create a .htaccess file
specify the mime types of cache manifest fileSize
AddType text/cache-manifest .manifest


step3 - <!-- change the html tag to point to the manifest file we just created -->

<html manifest="offline.manifest" lang="en">

*/


var online;//boolean variable, true when application is online and false when it is offline.

window.addEventListener("online", CheckOnlineStatus);
window.addEventListener("offline", CheckOnlineStatus);
CheckOnlineStatus();

// check online status
function CheckOnlineStatus() {

	/*
The NavigatorOnLine interface contains methods and properties related to the connectivity status of the browser.

There is no object of type NavigatorOnLine, but other interfaces, like Navigator or WorkerNavigator, implement it.

The NavigatorOnLine interface doesn't inherit any property.

NavigatorOnLine.onLine Read only
Returns a Boolean indicating whether the browser is working online.
*/
	online = navigator.onLine;

	var s = document.getElementById("status");
	if (online) {
		s.textContent = "ONLINE";
		s.className = "";
	}
	else {
		s.textContent = "OFFLINE";
		s.className = "offline";
	}

}


// example save data function
function Save() {

	if (online) {
		// ... form submit, Ajax call etc.
	}
	else {
		// ... window.localStorage
	}

}


/*
to test this without turing internet off and on : 

It looks like Chrome now has this feature via Chrome developer tools (Ctrl-Shift-I). Click on the "Device Mode" icon at the top-left. Now, a device and network bandwidth and latency (or completely offline) can be simulated using the dropdowns at the top of the screen:

NOTE: As of Apr 2015, unfortunately this does not affect Websocket connections, which continue to operate regardless of the Network setting. See https://code.google.com/p/chromium/issues/detail?id=423246.

*/