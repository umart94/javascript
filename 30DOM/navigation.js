// Document Object Model navigation

console.clear();
var n = document.getElementsByTagName("ul")[0];
console.log( "ul node", n);

//name of the node tag
console.log( "nodeName", n.nodeName );

//1 means element, 3 means a text node.
console.log( "nodeType", n.nodeType );

//returns parent node, i.e inside which node this childnode was in.
console.log( "parentNode", n.parentNode );

//childnodes of the parent node ul, will also count any white space around tags.
console.log( "childNodes", n.childNodes );
console.log( "childNodes.length", n.childNodes.length );

//only get the elements by tag name, this will not return the whitespace.. but this is not returning all the childnodes. JS considers whitespace as child node.

console.log( "li childNodes", n.getElementsByTagName("li") );

console.log( "real childNodes", ElementNodes(n.childNodes) );


//same parent but a tag that was defined previously above the tag supplied is called previous sibling and the tag defined below is nextSibling.
//console.log( "previousSibling", n.previousSibling );
//console.log( "nextSibling", n.nextSibling );

console.log( "real previousSibling", Sibling(n, "previousSibling") );
console.log( "real nextSibling", Sibling(n, "nextSibling") );


// return real DOM nodelist , type=1 is for element node , and type 3 is for text node, so we write a function to return only the real childNodes.
//pass nodeList to this function n.childNodes this contains text nodes as well but we will only return real nodes inside function.
function ElementNodes(nodelist) {
	var eNodes = [];//this is an array.. we will push the 1 type elements to this array.

	for (var i=0, j=nodelist.length; i < j; i++) {
		if (nodelist[i].nodeType == 1) {
			eNodes.push(nodelist[i]);
		}
	}

	return eNodes;
}


// return real sibling (or null)
function Sibling(node, type) {

	do {
		node = node[type];
	} while (node && node.nodeType != 1);//checks if node is not element type, and will return that node. note that this function will only run once for a node that is not an element
	//so it returns the realSibling.

	return node;

}