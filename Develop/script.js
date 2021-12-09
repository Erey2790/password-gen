// Assignment code here


function generatePassword() {
  console.log("Button has been clicked!!!")

//prompt the user for the password
var passwordLenght = prompt("Choose lenght of the password. Between 8 - 128");
var passwordConfirm = confirm("Click OK to confirm special characters'lowercase, uppercase, numeric, and/or special characters'.");
var lowercaseConfirm = confirm("click ok to include lowercase characters.");
var uppercaseConfirm = confirm("click ok to include uppercase characters.");
var numericConfirm = confirm("click ok to include numeric characters.");
var specialCharacterConfirm = confirm("click ok to include special characters.");


//password lenght 8-128

// lowercase, uppercase , number special characters

// ensure the character lenght is correct

// at least one charter lenght is selected input validation

// display the password to the site.


  return "Generated password will go here."
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
