// ************ prove javascript

//alert("Hello World!")

//document.writeln("Hello World")

//document.getElementById("title").innerHTML = "Hello World";

//const myVar = "Hello World!";
//console.log(myVar)

//let variableOne = "Pippo";
//let variableTwo = "Pluto";

//variableTwo = "Paperino";
//console.log(variableTwo)

//esercizio password

// finestra nome
const myName = prompt("Inserisci qui il tuo nome");
console.log(myName);

//finestra cognome
const mySurname = prompt("Inserisci qui il tuo cognome");
console.log(mySurname);

//finestra colore pref.
const myFavColor = prompt("Inserisci qui il tuo colore preferito");
console.log(myFavColor);


//generatore password
let myPassword = myName + mySurname + myFavColor + 21;
console.log(myPassword);

//output in html
document.getElementById("password").innerHTML = myPassword;