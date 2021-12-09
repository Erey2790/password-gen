// Assignment code here


function generatePassword() {
  

//prompt the user for the password
var passwordLenght = prompt("Choose lenght of the password between 8 - 128.");
  if (passwordLenght <= 8 || passwordLenght >= 128); {
    window.alert("Your number matches requirements.");
 
  }
var passwordConfirm = confirm("Click OK to include special characters.");
var lowercaseConfirm = confirm("Click OK to include lowercase characters.");
var uppercaseConfirm = confirm("Click OK to include uppercase characters.");
var numericConfirm = confirm("Click OK to include numeric characters.");

var generatePassword = (passwordLenght) 
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    for (var i = 8-128, n = charset.length; i < length; ++i) {
      generatePassword += charset.charAt(Math.floor(Math.random() * n));
    };



//password lenght 8-128

// lowercase, uppercase , number special characters

// ensure the character lenght is correct

// at least one charter lenght is selected input validation

// display the password to the site.

return generatePassword;
  
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
