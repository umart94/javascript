// My JavaScript Module
var Lib = Lib || {};

Lib.Output = (function() {

	// write message
	function Write(msg, element, start, end, color) {
		
		msg = msg || [];//pass default array if not created.
		if (msg.constructor != Array) msg = [msg];//array with a single element, the string msg itself.
		element = element || "message";//if nothing provided, we set it to message.
		
		//nodetype will exist if we have a node.
		//otherwise we locate this node within our document , using document.getElementById
		
		if (!element.nodeType) element = document.getElementById(element);
		if (!element || msg.length == 0) return;
		
		//start normalizes value to between 0 and max length - 1
		start = Math.max(0, Math.min(start, msg.length-1));
		//find the end of string
		//var x = (a ? b : c); ternary operator.
		end = (end ? Math.max(0, Math.min(end, msg.length-1)) : msg.length-1);
		color = color || "#000";
	
		element.innerHTML += '<p style="color:'+color+'">'+msg.slice(start,end+1).join(" ")+'</p>';
	}

	return {
		Write: Write,
		$: Write
	};

}());