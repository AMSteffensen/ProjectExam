// add eventlistener on submit button
function addEventListener() {
    // on sumbit form run validateForm
    document.getElementById('submitContact').addEventListener('click', vailidateForm);
}

// validate form on submit
function vailidateForm() {
    // Get user input
    var firstNameField = document.forms["form"]["firstName"].value;
    var lastNameField = document.forms["form"]["lastName"].value;
    var textAreaField = document.forms["form"]["textarea"].value;

    // check if name fields are not empty
    if (firstNameField === null || firstNameField === "") {
        document.getElementById('firstNameMsg').innerHTML = "Please fill in your First Name";
        return false;
    } else {
        firstNameMsg.style.display = "none";
    }

    if (lastNameField === null || lastNameField === "") {
        document.getElementById('lastNameMsg').innerHTML = "Please fill in the Last Name";
        return false;
    } else {
        lastNameMsg.style.display = "none";
    }

    if (textAreaField === null || textAreaField === "") {
        document.getElementById('textareaMsg').innerHTML = "Field cannot be empty.";
        return false;
    } else {
        lastNameMsg.style.display = "none";
    }

    var emailField = document.getElementById('email');
    if (!validateEmail(emailField.value) === true) {
        document.getElementById('emailMsg').innerHTML = "Invalid Email, please try again.";
        emailMsg.style.display = "block";
    } else {
        emailMsg.style.display = "none";
    }
}

function validateEmail(emailField) {
    // create a pattern to test an email address
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // return a boolean result
    return emailPattern.test(emailField);
}

(function (event) {
    addEventListener();

})();