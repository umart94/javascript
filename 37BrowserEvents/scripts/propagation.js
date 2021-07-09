// event propagation

// find table
var table = document.getElementById("multiplication");
var tcols = table.getElementsByTagName("col");

// delegate event handler
table.addEventListener( "mouseover", TableHandler );
table.addEventListener( "mouseout", TableHandler );

// event handler
function TableHandler(e) {

	//identify target node, this element is what ran the event. ( individual cell )
	var t = e.target;
	if (t.nodeName != "TD") return;
	//we only care about <td> </td> elements
	
	
	//classname that we want to apply to row and column
	//this will only apply the class active, style to the target nodes i.e td nodes only.
	//this is example of a single event.
	//var cName = ( e.type == "mouseover" ? "active" : "");
	 
	 
	//t.parentNode.className = cName;
	//tcols[ t.cellIndex ].className = cName;
	//cellIndex returns column number., we get the column number and apply the class to that entire column

		//apply the childclass to parentclass
	t.parentNode.className = tcols[ t.cellIndex ].className =
	( e.type == "mouseover" ? "active" : "");
	
}