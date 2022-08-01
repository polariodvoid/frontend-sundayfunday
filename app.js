//const email = document.getElementById('email')
//const password = document.getElementById('password')
//const form = document.getElementById('form')
//const errorElement = document.getElementById('loginForm')

//form.addEventListener('submit', (e) => {
//audio for seltzer
//let beat = new Audio('../images/pour-beer-into-glass-2-31585.mp3');
//document.getElementById("myBtn").addEventListener("click", function() {
    //const newLocal = beat.play();
  //});


//let messages = []
  //if (email.value === '' || email.value == null) {
    //messages.push('Email is required')
  //}

  //if (password.value.length <= 6) {
    //messages.push('Password must be longer than 6 characters')
  //}

  //if (password.value.length >= 20) {
    //messages.push('Password must be less than 20 characters')
  //}

  //if (password.value === 'password') {
    //messages.push('Password cannot be password')
  //}

 // if (messages.length > 0) {
   // e.preventDefault()
    //errorElement.innerText = messages.join(', ')
  //}
//})


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
  
