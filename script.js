// Assignment Code
var generateBtn = document.querySelector("#generate");

// variable arrays
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var special = ["!","@","#","$","%","^","&","*","~","=","+","-","_","?","<",">","/",":",";"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var confirmUpperCase;
  var confirmLowerCase;
  var confirmNumers;
  var confirmSpecial;
  var finalResultArr = [];
  
  var userPasswordLengthChoice = prompt("how many characters?(must be 8-128)");
  if ((userPasswordLengthChoice < 8) || (userPasswordLengthChoice > 128)) {
    alert ("Wrong! try again! must choose length 8-128");

  }
  else {
    confirmUpperCase = confirm ("do you upper case?")
    // console.log(confirmUpperCase);

    confirmLowerCase = confirm ("do you lower case?")
    // console.log(confirmLowerCase);

    confirmNumers = confirm ("do you numbers?")
    // console.log(confirmNumers);

    confirmSpecial = confirm ("do you special characters?")
    // console.log(confirmSpecial);
  }

  if (confirmUpperCase === true) {

    finalResultArr = finalResultArr.concat(upperCase)
    // console.log(finalResultArr)
  }

  if (confirmLowerCase === true) {

    finalResultArr = finalResultArr.concat(lowerCase)
    // console.log(finalResultArr)
  }

  if (confirmNumers === true) {

    finalResultArr = finalResultArr.concat(numbers)
    // console.log(finalResultArr)
  }

  if (confirmSpecial === true) {

    finalResultArr = finalResultArr.concat(special)
    // console.log(finalResultArr)
  }

  var myPassWord = ""

  for (var i = 0; i < userPasswordLengthChoice; i++) {
    myPassWord = myPassWord + finalResultArr[Math.floor(Math.random() * finalResultArr.length)]
    console.log(myPassWord)
  }
  
  return myPassWord 
}
