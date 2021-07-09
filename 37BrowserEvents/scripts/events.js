// events and handlers

// find first link on the page
var link = document.getElementsByTagName("a")[0];

//single onclick event
//link.onclick = MyEventHandler;
//link.onclick = AnotherHandler; // this overwrites the above line, and will not work properly

//so instead we use multiple event delegate option.

//IE6 , 7 have attachEvent method instead of addEventListener
//but older versions if IE dont have this function available.




// delegate event handler
link.addEventListener( "click", MyEventHandler );


// event handler
function MyEventHandler(e) {


//the e object passed to this event hander function is the event object
//this object contains properties about the event and methods that we can run
//prevent default stops the default action ( for e.g)


	alert("ouch!");
	console.log(e);
	//some properties displayed in console are standard
	//some are non standard and browser specific
	//some start with prefix MOZ
	
	//two of the most consistent and usable properties are target and current target.
	//current target is the element which had the event applied.
	console.log(e.currentTarget);
	//currentTarget will tell us which link was clicked.
	console.log(e.target);
	//element which this event is applied to
	
	
	
	
	
	e.preventDefault();
	//the default action is that , when we click the link it should go and redirect to the website
	//but since we use prevent default it wont redirect
	//if we dont call it and return false here
	//it will then redirect using default action
	
	//return false;
	

}