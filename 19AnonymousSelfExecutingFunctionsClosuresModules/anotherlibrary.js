function showMessage(msg){
	
	document.getElementById("message").innerHTML += Format(msg);
}


function Format(msg){
	
	return "<p>" + msg + "</p>";
}