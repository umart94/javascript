// custom controls

// DOM nodes
var form = {
	register:	document.getElementById("register"),
	email:		document.getElementById("email"),
	pass1:		document.getElementById("pass1"),
	pass2:		document.getElementById("pass2"),
	strength:	document.getElementById("strength")
};


// runs a function when form is submitted , we can also prevent default action
//html5 browsers wont submit the form if the form is not valid

form.register.addEventListener( "submit", CheckForm );


//after changing a value , the user focuses on another part of the page.

// check email field
form.email.addEventListener( "change", function(e) {
	if (e.target.value == "") alert("You forgot the email!");
} );


//captures key press , we can prevent user from pressing certain keys.

// stop space character from working in the password fields.

form.pass1.addEventListener( "keypress", NoSpaces );
form.pass2.addEventListener( "keypress", NoSpaces );


// password strength
//keyup event will be run when character is entered keypress received , character is displayed.
//run function PasswordStrength

form.pass1.addEventListener( "keyup", PasswordStrength );


// stop spaces being entered
function NoSpaces(e) {
	if (e.charCode == 32) e.preventDefault();
}


// check password strength
var strtext = ["weak", "average", "strong"];
var strcolor = ["#c00", "#f80", "#080"];
function PasswordStrength(e) {

	var pass = form.pass1.value;

	// count uppercase
	var uc = pass.match(/[A-Z]/g);//array
	uc = (uc && uc.length || 0);//length 0 if no uppercase characters exist, else return length of array ( how many upper case characters are there.

	// count numbers
	var nm = pass.match(/\d/g);
	nm = (nm && nm.length || 0);

	// count symbols - any character that isnt a letter or a number or a underscore.
	
	var nw = pass.match(/\W/g);
	nw = (nw && nw.length || 0);

	// determine strength
	var s = pass.length + uc + (nm * 2) + (nw * 3);
	s = Math.min(Math.floor(s / 10), 2); // a number between 0 and 2, use it as index for strength test color arrays.
	//so if it is 0, password is weak, if 1 average and if 2 strong.

	form.strength.textContent = strtext[s];
	form.strength.style.color = strcolor[s];

}


// form submit validation
var reEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
function CheckForm(e) {

	var msg = "";

	// check email - regular expression text.. get the object email attribute value. if its not correct , display it to user.
	if (!reEmail.test(form.email.value)) {
		msg += "\nyour email address";
	}

	// check passwords
	if (form.pass1.value == "" || form.pass1.value != form.pass2.value) {
		msg += "\nyour passwords";
	}

	// complete message
	if (msg != "") {
		msg = "Please check:"+msg;
	}
	else {
		msg = "Form is valid!\nSubmitting...";
	}

	alert(msg);

	//prevent default submit action.
	e.preventDefault();

}