function validateRegistrationForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var address = document.getElementById('address').value;
  
    var errorMessages = [];
  
    // Validate First Name
    if (!/^[A-Za-z]+$/.test(firstName)) {
      errorMessages.push('First Name should only contain alphabets.');
    }
  
    if (firstName.length < 6) {
      errorMessages.push('First Name should be at least 6 characters long.');
    }
  
    // Validate Last Name
    if (lastName.trim().length === 0) {
      errorMessages.push('Last Name should not be empty.');
    }
  
    // Validate Password
    if (password.length < 6) {
      errorMessages.push('Password should be at least 6 characters long.');
    }
  
    // Validate Email
    if (!/\S+@\S+\.\S+/.test(email)) {
      errorMessages.push('Invalid Email format.');
    }
  
    // Validate Mobile Number
    if (!/^\d{10}$/.test(mobileNumber)) {
      errorMessages.push('Mobile Number should contain 10 digits only.');
    }
  
    // Validate Address
    if (address.trim().length === 0) {
      errorMessages.push('Address should not be empty.');
    }
  
    // Display error messages or submit the form
    if (errorMessages.length > 0) {
      var errorDiv = document.getElementById('errorMessages');
      errorDiv.innerHTML = errorMessages.join('<br>');
      return false; // Prevent form submission
    } else {
      return true; // Submit the form
    }
  }
  