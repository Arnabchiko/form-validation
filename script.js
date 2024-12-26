function myMenuFunction() {
    let i = document.getElementById("navMenu");
    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}



let a = document.getElementById("loginBtn");
let b = document.getElementById("registerBtn");
let x = document.getElementById("login");
let y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}


//form validation

document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    const email = emailField.value.trim();
    const password = passwordField.value.trim();

    let isValid = true;
    let errorMessage = "";

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += "Please enter a valid email address.\n";
        emailField.classList.add("error");
    } else {
        emailField.classList.remove("error");
    }

    // Validate password
    const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    if(!passwordRegex.test(password)){
        isValid = false;
        errorMessage += "Please enter a valid password. password must needed a capital letter, a spical character, and number\n";
        passwordField.classList.add("error");
    } else {
        passwordField.classList.remove("error");
    }

    // Show errors or submit form
    if (isValid) {
        alert("Form submitted successfully!");
        this.submit(); // Submit the form to the action URL
    } else {
        alert(errorMessage);
    }
});


document.getElementById("register").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission for validation

    
    // Get input values
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const r_email = document.getElementById("remail").value.trim();
    const r_password = document.getElementById("rpassword").value;

    // Regular expressions
    const nameRegex = /^[A-Za-z]{2,}$/; // At least 2 alphabetic characters
    const r_emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email pattern
    const r_passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one letter, one number
    
    //
    const firstnameField = document.getElementById("firstname");
    const lastnameField = document.getElementById("lastname");
    const r_emailField = document.getElementById("remail");
    const r_passwordField = document.getElementById("rpassword");

    let r_isValid = true;
    let r_errorMessage = "";


    // Validation

    //name
    if (!nameRegex.test(firstname)) {
        r_isValid = false;
        r_errorMessage += "Please enter your first-name.\n";
        firstnameField .classList.add("error");
    } else {
        firstnameField.classList.remove("error");
    }

    //lastname
    if (!nameRegex.test(lastname)) {
        r_isValid = false;
        r_errorMessage += "Please enter your last-name.\n";
        lastnameField .classList.add("error");
    } else {
        lastnameField.classList.remove("error");
    }

    //email
    if (!r_emailRegex.test(r_email)) {
        r_isValid = false;
        r_errorMessage += "Please enter a valid email address.\n";
        r_emailField.classList.add("error");
    } else {
        r_emailField.classList.remove("error");
    }

    //password
    if(!r_passwordRegex.test(r_password)){
        r_isValid = false;
        r_errorMessage += "Please enter a valid password. password must needed a capital letter, a spical character, and number\n";
        r_passwordField.classList.add("error");
    } else {
        r_passwordField.classList.remove("error");
    }

    // Show errors or submit form
    if (r_isValid) {
        alert("Form submitted successfully!");
        this.submit(); // Submit the form to the action URL
    } else {
        alert(r_errorMessage);
    }
});

