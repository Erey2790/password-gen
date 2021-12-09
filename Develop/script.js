// Assignment code here


function generatePassword() {
  console.log("Button has been clicked!!!")

//prompt the user for the password

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
