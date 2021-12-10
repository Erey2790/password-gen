// Assignment code here

//Glabal Variables

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];



function generatePassword() {

  //prompt the user for the password
  var passwordLenght = prompt("Choose lenght of the password between 8 - 128.");
  if (passwordLenght < 8 || passwordLenght > 128) {
    window.alert("Your password length must be between 8 and 128 characters.");
    return;
  };

  var symbolsdConfirm = confirm("Click OK to include special characters.");
  var lowercaseConfirm = confirm("Click OK to include lowercase characters.");
  var uppercaseConfirm = confirm("Click OK to include uppercase characters.");
  var numericConfirm = confirm("Click OK to include numeric characters.");

  if (!symbolsdConfirm && !lowercaseConfirm && !uppercaseConfirm && !numericConfirm) {
    window.alert("Your password must contain at least one type of character.");
    return;
  };


  var PWResult = [];
  var usersChoices = [];
  var mustUseOne = [];

  if (symbolsdConfirm) {
    usersChoices = usersChoices.concat(symbols);
    mustUseOne.push(randomize(symbols));
  };

  if (lowercaseConfirm) {
    usersChoices = usersChoices.concat(lowerCase);
    mustUseOne.push(randomize(lowerCase));
  };

  if (uppercaseConfirm) {
    usersChoices = usersChoices.concat(upperCase);
    mustUseOne.push(randomize(upperCase));
  };

  if (numericConfirm) {
    usersChoices = usersChoices.concat(numbers);
    mustUseOne.push(randomize(numbers))
  }



  for (var i=0; i < usersChoices.length; i++ ) {
    var userChoice =randomize(userChoices);
    PWResult.push(userChoice);
  }

  for (var i=0; i< mustUseOne.length; i++) {
    PWResult[i] = mustUseOne[i]
  }

  return PWResult.join("");

  

  







  // var generatePassword = (passwordLenght)
  // charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  // for (var i = 8 - 128, n = charset.length; i < length; ++i) {
  //   generatePassword += charset.charAt(Math.floor(Math.random() * n));
  // };



  //password lenght 8-128

  // lowercase, uppercase , number special characters

  // ensure the character lenght is correct

  // at least one charter lenght is selected input validation

  // display the password to the site.


}



function randomize (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomChar = array[randomIndex];
  return randomChar;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
