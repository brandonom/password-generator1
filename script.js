// Assignment Code
var generateBtn = document.querySelector("#generate");
  

// Write password to the #password input
function generatePassword() {
  const length = getPasswordLength();
  if (length === null) return;

  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumbers = confirm('Include numbers?');
  const includeSpecialChars = confirm("Include special characters e.g(?, !, etc))")

  const password = genRandPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars);
  displayPassword(password);

}

function getPasswordLength() {
  let length = parseInt(prompt("Enter password length (must be between 8 and 128 characters) "));
  if (isNaN(length) || length < 8 || length > 120) {
    alert("Please enter valid length.");
    return null;
  }
  return length;
}

function genRandPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars){
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+=-';

  let chars = '';
  if (includeLowercase) chars += lowercaseChars;
  if (includeUppercase) chars += uppercaseChars;
  if (includeNumbers) chars += numberChars;
  if (includeSpecialChars) chars += specialChars;

  if (chars === ''){
    alert('Select atleast one character type for password.');
    return '';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

function displayPassword(password){
  const passwordDisplay = document.getElementById('passwordDisplay');
  if (password){
    passwordDisplay.textContent = password
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
// document.getElementById("myBtn").addEventListener("click",displayDate);