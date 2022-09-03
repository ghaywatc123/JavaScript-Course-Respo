alert("Welcome friends")
console.log(document)
console.log(document.documentURI); // it will give youe entire url of 
console.log(document.title) // it will give you a  

console.log(document.getElementById('ID1')) // this select element by id from document

console.log(document.getElementsByClassName('Class01')) // this select element by class name from document.

// select element using querySelector

let MyElement = document.querySelector('h1');
console.log(MyElement)

let querySelectorall = document.querySelectorAll('h1');  // it will be select all same type of element
console.log(querySelectorall);

// let changed or modify the content in which element selected by querySelector
MyElement.textContent = "This is Changed Information"

// Assignment: Change the content of all same element using arrow function

let Assignment = document.querySelectorAll('p');
Assignment.forEach((p) =>     p.textContent = "Assignment is completed")

