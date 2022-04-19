// Query selectors
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Characters
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!@#$%^&*()_+";

//Event listener button
generateBtn.addEventListener("click", writePassword);

functiin writePassword() {
  preventDefault();
  password.value === "";
  var randomString = "":
}

var lowercaseChar = confirm("Do you want your password to have lowercase letters?");
var uppercaseChar = confirm("Do you want your password to have uppercase letters?");
var numericalChar = confirm("Do you want your password to have numbers?");
var specialChar = confirm("Do you want your password to have special characters?");
var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");


if (passwordLength < 8 || passwordLength > 128) {
  alert("Password is not between 8 characters and 128 characters. Please try again.");
  var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
}


else if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
  alert("You must chose at least one password criteria.");
  var lowercaseChar = confirm("Do you want your password to have lowercase letters?");
  var uppercaseChar = confirm("Do you want your password to have uppercase letters?");
  var numericalChar = confirm("Do you want your password to have numbers?");
  var specialChar = confirm("Do you want your password to have special characters?");

if (lowercaseChar) {
  optionsVariable += lowercaseAlphabet;
}
if (uppercaseChar) {
  optionsVariable += uppercaseAlphabet;
}
if (numericalChar) {
  optionsVariable += numbers;
}
if (specialChar) {
  optionsVariable += specialCharacters;
}

// Generates a random password based on selected criteria
for (var i = 0; i < passwordLength; i++) {
  
  randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
}
password.value = randomString;

}
