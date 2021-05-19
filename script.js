// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getUserChoices() {
  var userInput = prompt("How many characters would you like in your password?");

  if (userInput < 8 || userInput > 128) {
    alert("Password must be between 8-128 characters long.");
  }
  else {
    alert("Please continue");

    var userCaps = confirm("Would you like it to include caps?");
    var userLowercase = confirm("Would you like it to include lowercase?");
    var userNumbers = confirm("Would you like it to include numbers?");
    var userSpecialCharacter = confirm("Would you like it to include special characters?");


    if (!userCaps && !userLowercase && !userNumbers && !userSpecialCharacter) {
      alert("You must choose at least one the prior choices.");
      return;
    }

  }
  var psChoices = {
    passwordLength: userInput,
    capsChoice: userCaps,
    lowercaseChoice: userLowercase,
    numberChoice: userNumbers,
    specialCharacter: userSpecialCharacter,
  }
  return psChoices;
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function generatePassword() {
  var choices = getUserChoices()
  var allCharacters = []
  var finalCharacters = []

  if (choices.specialCharacter) {
    allCharacters = allCharacters.concat(specialCharacters)
    finalCharacters.push(getRandom(specialCharacters))
  }
  if (choices.numberChoice) {
    allCharacters = allCharacters.concat(numbers)
    finalCharacters.push(getRandom(numbers))
  }
  if (choices.lowercaseChoice) {
    allCharacters = allCharacters.concat(lowercase)
    finalCharacters.push(getRandom(lowercase))
  }
  if (choices.capsChoice) {
    allCharacters = allCharacters.concat(caps)
    finalCharacters.push(getRandom(caps))
  }
  var completedPassword = ""
  for (var i = 0; i < finalCharacters.length; i++) {
    completedPassword += finalCharacters[Math.floor(Math.random() * finalCharacters.length)]
  }

  for (var i = 0; i < (choices.passwordLength - finalCharacters.length); i++) {
    completedPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)]
  }

  return completedPassword
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);