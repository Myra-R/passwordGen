// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var isValid = false;
  //Do/While fails unless user enters a valid number
  do {
    //prompts user for a number between 8 and 128
    var userLength = prompt("Enter a number between 8 and 128")
    userLength = parseInt(userLength);
    // Conditional to determine if user enters a valid choice
    // if ((userLength > 8) || (userLength < 128) || (isNaN(userLength))){
    //     isValid = true;
    // }
    // // conditional failed, continues looping
    // else{
    //   alert("Enter a valid number");
    // }

    if ((userLength < 8) || (userLength > 128) || (isNaN(userLength)))
      alert("Please pick a number between 8 and 128.");
    else {
      // assumes all values match correct numbers
      alert("You have picked a length of " + userLength + " characters for your password.");
      isValid = true;
    }

  } while (!isValid);

console.log(userLength);

  isValid = false;

  do {
    var lowerAlpha = confirm("Would you like lowercase characters?");
    var upperAlpha = confirm("would you like uppercase characters?");
    var numeric = confirm("Would you like numbers?");
    var specChar = confirm("Would you like special characters?");

    if ((lowerAlpha == false) && (upperAlpha == false) && (numeric == false) && (specChar == false)) {
      alert("You must pick at least one");

    } else {
      isValid = true;
    }
  } while (!isValid);

  console.log(lowerAlpha);
  console.log(upperAlpha);
  console.log(numeric);
  console.log(specChar);

  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specials = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}"];

  var allSets = [];

  if (lowerAlpha == true) {
    for (var i of alphabet) {
      allSets.push(i.toLowerCase());
    }
  }

  if (upperAlpha == true) {
    for (var i of alphabet) {
      allSets.push(i.toUpperCase());
    }
  }
  if (numeric == true) {
    for (var i of numbers) {
      allSets.push(i);
    }
  }
  if (specChar == true) {
    for (var i of specials) {
      allSets.push(i);
    }
  }

  console.log(allSets);

  var password ="";

  for (var i = 0; i < userLength; i++) {
    password += allSets[Math.floor(Math.random() * allSets.length)];
  }

  return password;

}
generateBtn.addEventListener("click", writePassword);