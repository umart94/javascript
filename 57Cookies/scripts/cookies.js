// cookies

// native cookie handling in JavaScript
//value we want to set, expiry date for cookie and path for cookie 
//With a path parameter, you can tell the browser what path the cookie //belongs to. By default, the cookie belongs to the current page.
/*document.cookie = "a=100; expires=Fri, 01 Jan 2021 00:00:00 GMT; path=/";
document.cookie = "b=200; expires=Fri, 01 Jan 2021 00:00:00 GMT; path=/";
document.cookie = "c=300; expires=Fri, 01 Jan 2021 00:00:00 GMT; path=/";

// show cookies
document.getElementById("output").textContent = document.cookie;
*/

// using cookielib.js
Cookie.Set("a", 101, 10);
Cookie.Set("b", 202, 20);
Cookie.Set("c", 303, 30);

Cookie.Delete("b");

document.getElementById("output").innerHTML =
	"<p>cookie a = " + Cookie.Get("a") + "</p>" +
	"<p>cookie b = " + Cookie.Get("b") + "</p>" +
	"<p>cookie c = " + Cookie.Get("c") + "</p>";