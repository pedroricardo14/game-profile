var firstName = "Robert";
var lastName = "Downley";
var username = "Username: " + firstName + " " + lastName;
console.log(username);

var characterName = "Iron Man";
var character = "Character: " + characterName;
console.log(character);

document.getElementById("username").innerHTML = username;
document.getElementById("character").innerHTML = character;