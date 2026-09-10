console.log("Hello, World!");

const userName = "Juha";
const favoriteAnimal = "Mäyräkoira";

console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);

alert("Tervetuloa hienoille nettisivuilleni!")

const visitorName = prompt("Mikä on nimesi?");

console.log(visitorName);

console.log("Terve, " + visitorName + "! Tervetuloa javascriptin pariin!");

const visitorFavoriteAnimal = prompt("Mikä on lempieläimesi?");

console.log("Terve, " + visitorName + "! Lempieläimesi on " + visitorFavoriteAnimal + ".");

const visitorAge = prompt("Mikä on ikäsi?");

if (visitorAge >= 18) {
    result = "Sinä olet aikuinen!";
} else {
    result = "Sinä olet lapsi!";
}

console.log(result);

function greetUser(name) {
    console.log("Terve " + name + "!");
}

greetUser("Juha");