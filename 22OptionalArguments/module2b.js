// My JavaScript Module
var Lib = Lib || {};

Lib.Output = (function() {

	// write message
	function Write(opt) {
		
		/*if we pass string in the function, then initialize variable message with opt. string value. then create the object. if an object is passed then we use
		
		Extend method, in which we set default values for the objects.
		this function appends default properties to a set, and returns that set 
		back to function 
		
		so that the default values can be overwritten with the values we supply in the function.
		
		now we can access these properties of these objects. with dot operator.
		
		e.g opt.msg
		opt.element
		opt.start etc.
		
		*/
		if (opt.constructor != Object) opt = { msg: opt };
		
		opt = Extend({
			element: "message",
			msg: [],
			start: 0,
			end: null,
			color: "#000"
		}, opt);
		
		if (opt.msg.constructor != Array) opt.msg = [opt.msg];
		opt.element = opt.element || "message";
		if (!opt.element.nodeType) opt.element = document.getElementById(opt.element);
		if (!opt.element || opt.msg.length == 0) return;
		
		opt.start = Math.max(0, Math.min(opt.start, opt.msg.length));
		opt.end = (opt.end ? Math.max(0, Math.min(opt.end, opt.msg.length)) : opt.msg.length);
	
		opt.element.innerHTML += '<p style="color:'+opt.color+'">'+opt.msg.slice(opt.start,opt.end+1).join(" ")+'</p>';
	}
	
	// extend default parameters
	function Extend(obj1, obj2) {
	
		for (var prop in obj2) {
			if (obj2.hasOwnProperty(prop)) obj1[prop] = obj2[prop];
		}
		
		return obj1;
	}

	return {
		Write: Write,
		$: Write
	};

}());