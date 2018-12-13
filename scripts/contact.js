document.getElementById('submitContact').addEventListener('click', valdidateForm);

function valdidateForm() {
    var firstName = document.forms["form"]["firstName"].value;

    if (firstName == null || firstName == "") {
        return false;
    }

    if (lastName == null || lastname == "") {
        console.log(2);
        return false;
    }

    if (email == null || email == "") {
        console.log(3);
        return false;
    }

    if (textarea == null || textarea == "") {
        console.log(4);
        return false;
    }

    var emailField = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    // validate email
    if (!validateEmail(emailField.value) === true) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }

    function valdidateEmail(email) {
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var emailInput = document.getElementById("email");
        // return boolean result
        return emailRegex.test(String(emailInput));
    }

}



// add event listner
/* 
 */
// valdidate form fields
/* function validateFormFields() {

    // check if first name text box is not empty
    function checkFirstName() {
        var firstNameField = document.getElementById('fname');
        var firstNameError = document.getElementById('fnameError');
            if (firstNameField.value === '') {
                firstNameError.style.display = "block";
            } else {
                firstNameError.style.display = "none";
        }
    }
     */
// check if last name text box is not empty
/*   function checkLastName() {
      var lastNameField = document.getElementById('lastNameError');
      var lastNameError = document.getElementById('lastNameError');
          if (lastNameField.value === '') {
              lastNameError.style.display = "block";
          } else {
              lastNameError.style.display = "none";
      }
  } 
  */
// check and display phone  error message
/* function checkPhoneNumber() {
    var phoneField = document.getElementById('phone');
    var phoneError = document.getElementById('phoneError');
    // validate phone number
    if (validatePhone(phoneField.value) === false) {
        console.log(phoneField.value)
        phoneError.style.display = "block";
    } else {
        phoneError.style.display = "none";
    }
} */

// check and display email error message
/*  function checkEmail() {
     var emailField = document.getElementById('email');
     var emailError = document.getElementById('emailError');
     // validate email
     if (!validateEmail(emailField.value) === true) {
         emailError.style.display = "block";
     } else {
         emailError.style.display = "none";
     }
 } */

// call functions
/*    checkFirstName();
   checkLastName();
   checkPhoneNumber();
   checkEmail(); */


// validate email textbox
/* function validatePhone(phone) {
    var phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/gm;

    // return boolean result
    return phonePattern.test(String(phone));
}

// validate number
function validatePhone(phone) {
    var phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/gm;

    // return boolean result
    return phonePattern.test(String(phone));
}
 */