// Assignment code here

function generate(){
  // get references of all the inputs
  const length = document.getElementById("length").value;
  const numbers = document.getElementById("numbers").checked;
  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const symbols = document.getElementById("symbols").checked;
  
  // generate random password
  const password = generatePassword(parseInt(length), numbers, uppercase, lowercase, symbols)
  // show the password
  document.getElementById("password").innerHTML = password
  alert("Your Secure Password: " + password)
  console.log(password)
};

function generatePassword(length, numbers, uppercase, lowercase, symbols) {
  let characters = " ";
  
  if (numbers) {
    characters += "0123456789"
  }
  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }
  if (symbols) {
    characters += "!#$%&()*+,-./:;<=>?@[^_`{|}~"
  }
  
  let passwordArray = [];
  while (passwordArray.length < length){
    const characters = characters[Math.floor(Math.random() * characters.length)];
    passwordArray.push(character);
  }
  return passwordArray.join('');
  
}

// document.getElementById("generate").addEventListener("click", function (
