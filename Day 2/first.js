// const obj = (document.getElementById("first").innerHTML = "Header1"); //returns the string not an object

// //to access it separately as an object we have to use this

const obj = document.getElementById("first");
obj.innerHTML = "Header2";
console.log(obj.__proto__); // HTMLElement prototype

// Get elements by class name → returns an HTMLCollection (array-like object)
const obj2 = document.getElementsByClassName("header2");
obj2[0].innerHTML = "HEader2"; //accesing obj2[0] means header2

obj2[0].style.color = "Violet";

console.log(obj.tagName); //returns h1
