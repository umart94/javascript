
(function() {


function Format(num){
	return Math.floor(num);
}

//because of javascript closure property, any code inside this block can be accessed/
//so we can still use this version of Format function here..
//but the showMessage function is being used from anotherlibrary.

showMessage("This is MYLibrary.js calling function from anotherlibrary.js"+Format(9.1));

}());
//we get NaN here because the Format message in anotherlibrary was loaded first
//that formatted the p tags
//now we load mylibrary and it applies formatting to a number
//so all variables and functions have a global scope
//if we use same name twice , it will not work.


// syntax for anonymous functions is {} brackets first.
//then () braces
//then ); closing braces.


//this whole section is defining a function.
//it just doesnt have a name yet.
// () these brackets mean that the function is run immediately.
// the whole thing must be wrapped in brackets otherwise javascript needs us to provide a name for the function.

//Now when javascript loads these files, it finds the local version of Format Function. , so the local function is used instead of global function.







