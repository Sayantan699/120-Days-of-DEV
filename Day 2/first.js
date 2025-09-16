// const obj = (document.getElementById("first").innerHTML = "Header1"); //returns the string not an object

// //to access it separately as an object we have to use this

const obj = document.getElementById("first");
obj.innerHTML = "Header2";
console.log(obj.__proto__); // HTMLElement prototype
