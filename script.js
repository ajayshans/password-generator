// Create variables consististing of applicable characters
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var upperChar = lowerChar.toUpperCase();
var specialChar = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var numericChar = '0123456789';

function generatePassword() {
  // Prompt user for desired password length
  var userPasswordLength = window.prompt("Enter desired password character length:");

  // If user clicks cancel, end function immediately
  if (!userPasswordLength) {
    return;
  }
  else if (isNaN(userPasswordLength) || userPasswordLength < 8 || userPasswordLength > 128) {
    alert("Error: Password length must be a number between 8 and 128 characters inclusive!");
    return;
  } 

  // Confirm with user whether or not to include each character type
  // Stored values will either be true or false
  var lowerConfirm = window.confirm("Include lowercase characters in password?");
  var upperConfirm = window.confirm("Include uppercase characters in password?");
  var specialConfirm = window.confirm("Include special characters in password?");
  var numericConfirm = window.confirm("Include numeric characters in password?");

  // Ensure at least 1 criteria above is selected
  if (!lowerConfirm && !upperConfirm && !specialConfirm && !numericConfirm) {
    alert("Error: Please select at least one password criteria!");
    return;
  }

  // Create string consisting of applicable characters based on user criteria
  var applicableChar = '';

  if (lowerConfirm) {
    applicableChar +=  lowerChar;
  }
  if (upperConfirm) {
    applicableChar += upperChar;
  }
  if (specialConfirm){
    applicableChar += specialChar;
  }
  if (numericConfirm) {
    applicableChar += numericChar;
  }

  // Initialise finalPassword variable
  finalPassword = '';
  // From string of applicable characters, randomly choose characters to end up with password of user's desired length
  for (var i = 0; i < userPasswordLength; i++) {
    var randomCharIndex = Math.floor(Math.random() * applicableChar.length);
    var randomChar = applicableChar[randomCharIndex];
    finalPassword += randomChar
  }

  // Ensure function returns final resulting password
  return finalPassword
}

// Assigns variable to HTML #generate element (i.e. 'Generate Password' button)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Below is not an in-built function. Need to define generatePassword() above
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  if (typeof password === 'string') {
    // Sets displayed text to generated password given it's a string
    passwordText.value = password;
  } else {
    // Displays error message if error in user requirements (undefined)
    passwordText.value = 'Error: User inputs not valid';
  }

}

// Add event listener to generate button
// Runs writePassword function when there is a click on the button element with #generate id element
generateBtn.addEventListener("click", writePassword);
