
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input+
function writePassword() {
  var length = prompt("Enter the length of the password");
  
  
  if (isNaN(length) || length <= 8) {
    alert("Please enter a valid number greater than 8 for the password length no more than 128");
    return;
  }
  if (isNaN(length) || length >=128) {
    alert("Please enter a valid number greater than 8 for the password length no more than 128");
    return;
  }


  var useUppercase = confirm("Include uppercase letters?");
  var useLowercase = confirm("Include lowercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecialChars = confirm("Include special characters?");
  
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  var everyChar = "";
  if (useUppercase) everyChar += uppercaseChars;
  if (useLowercase) everyChar += lowercaseChars;
  if (useNumbers) everyChar += numberChars;
  if (useSpecialChars) everyChar += specialChars;

  if (everyChar === "") {
    alert("Please select at least one character set for the password.");
    return;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * everyChar.length);
    password += everyChar.charAt(randomIndex);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
