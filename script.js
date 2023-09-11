// Assignment Code
var generateBtn = document.querySelector("#generate");
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword("littlespider");
  var passwordText = document.querySelector("password");
prompt("Please type password length");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("myBtn").addEventListener("click",displayDate);