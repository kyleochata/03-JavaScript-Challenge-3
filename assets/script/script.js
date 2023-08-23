/*
Click button --> generate new password USER

prompt with criteria
1. how many char is password
  Your password must be between 8 and 128 char. Please enter the desired amount:
  if password length doesn't meet criteria, display message that character length is not accepted, then loop back to 1.
2. WOuld you like to include lowercase letters?
click ok to continue...
3. Would ... uppercase
4. would .. numbers
5. would ... special char
if 2-5 are all false, end function and start over: display message that one of the criteria must be accepted;

When criteria are fulfilled, display password

*/
//assignment code; targeting id of generate on html
var generateBtn = document.querySelector("#generate");

//on button click need to generate the random password
//first function to satisfy the criteria for generatepassword function to work
function generatePassword() {

  //set var for password criteria
  let uppercase = "ABCDEFHIJKLMNOPQRSTUVWXYZ"
  let lowercase = "abcdefghijklmnopqrstuvwxyz"
  let symbol = "!@#$%^&*()"
  let number = "1234567890"

  let password = "";
  let multiSelect = "";

  //asking user for character length
  let charLength = prompt('Your password must be between 8 and 128 char. Please enter the desired amount.');
    if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
      alert('Your password length does not meet the criteria. Please enter a number between 8 and 128.');
      return;
    }
else {
  //variable prompts for password criteria
  var lowercaseSelect = confirm('Your password will contain lowercase letters. Click OK to continue. Click CANCEL to say no..');

  var uppercaseSelect = confirm('Your password will contain uppercase letters. Click OK to continue. Click CANCEL to say no.');

  var numberSelect = confirm('Your password will contain numbers. Click OK to continue. Click CANCEL for no.');

  var symbolSelect = confirm('Your password will special characters (!, @, #, ...) in your password? Click OK to continue. Click CANCEL for no.');
}

//if statements to know which variables to concat with the empty multiSelect string
if (lowercaseSelect) {
  multiSelect += lowercase;
}

if (uppercaseSelect) {
  multiSelect += uppercase;
}

if (numberSelect) {
  multiSelect += number;
}

if (symbolSelect) {
  multiSelect += symbol;
} 

if (!lowercaseSelect && !uppercaseSelect && !numberSelect && !symbolSelect) {
  alert('Please ensure that you have clicked OK on at least one of following: password will contain: lowercase letters, uppercase letters, numbers, or special characters.');
  return;
} 

//loop for creating the randomized password based on the criteria from the user
for (i = 0; i < charLength; i++) {
  password += multiSelect[Math.floor(Math.random() * multiSelect.length)];
}
return password;
}

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword(); // define generate password fxn
  // generatePassword must return a string; 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
