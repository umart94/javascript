// Document Object Model selectors

//will get only the element with this id
console.log( "intro ID", document.getElementById("intro") );
//will get only the elements with this tag, as an array
console.log( "p tags", document.getElementsByTagName("p") );
//will get only the elements with this classname
console.log( "highlight class", document.getElementsByClassName("highlight") );


//querySelector will only return the first Node it finds.
console.log( "ul > li", document.querySelector("ul > li") );
//querySelectorAll will return all Nodes it finds.
console.log( "ul > li", document.querySelectorAll("ul > li") );


//we use getElementsByTagName twice or as many times to traverse the dom.
var header = document.getElementsByTagName("header")[0];
var ptags = header.getElementsByTagName("p");
console.log( "header p", ptags );