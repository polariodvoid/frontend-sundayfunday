

function validate() {
    let password = document.querySelector("#pass1");
    let upper = document.querySelector("#upper");
    let lower = document.querySelector("#lower");
    let symbol = document.querySelector("#symbol");
    let number = document.querySelector("#number");
    let length = document.querySelector("#length");
  
    //validate numbers
    if (password.value.match(/[0-9]/)) {
      number.style.color = "green";
    } else {
      number.style.color = "red";
    }
  
    //validate uppercase
    if (password.value.match(/[A-Z]/)) {
      upper.style.color = "green";
    } else {
      upper.style.color = "red";
    }
  
    //validate lowercase
    if (password.value.match(/[a-z]/)) {
      lower.style.color = "green";
    } else {
      lower.style.color = "red";
    }
  
    //validate symbol
    if (password.value.match(/[!\@\#\$\%\^\&\,]/)) {
      symbol.style.color = "green";
    } else {
      symbol.style.color = "red";
    }
  
    //length
  
    if (password.value.length < 6) {
      length.style.color = "red";
    } else {
      length.style.color = "green";
    }
}
  
function confirmPassword() {
    let password1 = document.querySelector("#pass1");
    let password2 = document.querySelector("#pass2");
  
    if(password1 != password2) {  
      document.getElementById("message2").innerHTML = "**Passwords are not same";  
      return false;  
    } else {  
      alert ("Your password created successfully");  
      document.write("JavaScript form has been submitted successfully");  
    }  
  }
  
