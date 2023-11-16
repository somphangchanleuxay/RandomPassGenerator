var length = 12;

var upperCase = "ABCDEFGHILJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialChar = "`~!@#$%^&*()-_=+{[}]<>/";

var everyChar = upperCase + lowerCase + number + specialChar;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input+
function writePassword() {
  var password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialChar[Math.floor(Math.random() * specialChar.length)];
  
  while(length > password.length){
    password += everyChar[Math.floor(Math.random() * everyChar.length)];
  }



  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
