//the regex pattern reqruirements...
// Name fields - can not have a space in the name or a number
// Age field - must be a number between 0 and 120 (inclusive)
// Email field - must be a valid email without use of the email input type
// Phone field - must be in the format of 000-000-0000 or 0000000000 or 000 000 0000
// Postal code field - must be in the format of a Canadian postal code (ANANAN or ANA NAN) where A is an alphabetic character and N is a number.
document.addEventListener("DOMContentLoaded", ()=> {
    function validateForm() {
        let formError = document.getElementById("formError");

        // Get the values from the form using the form index 0 for the first form on the page, and the index of the input field
        let firstName = document.getElementById("firstNameInput").value;
        let lastName = document.getElementById("lastNameInput").value;
        let email = document.getElementById("emailInput").value;
        let age = document.getElementById("ageInput").value;
        let postal = document.getElementById("postalCodeInput").value;
        let phone = document.getElementById("phoneInput").value;

        // Regular expressions for the form fields
        let namePattern = /^[a-zA-Z]+$/;
        let agePattern = /^(1[01][0-9]|120|[1-9]?[0-9])$/;
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let phonePattern = /^[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;
        let postalPattern = /^[ABCEGHJKLMNPRSTVWXYZ]\d[ABCEGHJKLMNPRSTVWXYZ][ -]?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i

        // Validate the form fields boolean
        try {
            if (firstName === "" || lastName === "" || age === "" || email === "" || phone === "" || postal === "") {
                throw "All fields must be filled out";
            }
            // Check if either name fields contain spaces or numbers
            if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
                throw "Name must not contain spaces or numbers";
            }
            if (!emailPattern.test(email)) {
                throw "Email must be a valid email address";
            }
            if (!agePattern.test(age)) {
                throw "Age must be a number between 0 and 120";
            }
            if (!phonePattern.test(phone)) {
                throw "Phone number must be in the format 000-000-0000, 0000000000, or 000 000 0000";
            }
            if (!postalPattern.test(postal)) {
                throw "Postal code must be in the format ANANAN or ANA NAN";
            }
            // Catch the error and display it in the formError
        } catch (error) {
            formError.style.color = "red";
            formError.innerText = error;
            return false;
        }
        //else if the form is valid, display a success message
        formError.style.color = "green";
        formError.innerText = "Form submitted successfully";

        // Add a fade in effect to the formError and profileView
        formError.classList.add("fade-in-text");
        document.getElementById("profileView").classList.add("fade-in-text");

        // Display the greeting message, replacing the login button with the logout button
        document.getElementById("loginGreeting").innerText = "Hello, " + firstName + " " + lastName;
        document.getElementById("loginButton").style.display = "none";
        document.getElementById("logoutButton").style.display = "block";
        document.getElementById("pleaseLogin").style.display = "none";
        document.getElementById("submitForm").style.display = "none";

        // finally return true if the form is valid
        return true;
    }

    // Event listener for the form submission
    document.getElementById("submitForm").addEventListener("click", (e) => {
        console.log("Submit button clicked!"); // Check browser console
        e.preventDefault(); // Always prevent default form submission
        if (validateForm() === true) {
            // Display profile view
            profileView();
        }
    });

    // Function to display the profile view
    function profileView() {
        document.getElementById("profileView").style.display = "block";

        // Get the values from the form using the form index 0 for the first form on the page, and the index of the input field
        let firstName = document.getElementById("firstNameInput").value;
        let lastName = document.getElementById("lastNameInput").value;
        let email = document.getElementById("emailInput").value;
        let age = document.getElementById("ageInput").value;
        let postal = document.getElementById("postalCodeInput").value;
        let phone = document.getElementById("phoneInput").value;

        let profileName = document.getElementById("profileName");
        let profileEmail = document.getElementById("profileEmail");
        let profileAge = document.getElementById("profileAge");
        let profilePostal = document.getElementById("profilePostal");
        let profilePhone = document.getElementById("profilePhone");

        profileName.innerHTML = firstName + " " + lastName;

        profileEmail.innerHTML = email;
        profileEmail.style.color = "blue";

        profileAge.innerHTML = age;
        profileAge.style.color = "green";

        profilePostal.innerHTML = postal;
        profilePostal.style.color = "purple";

        profilePhone.innerHTML = phone;
        profilePhone.style.color = "red";
    }

    //logout button event listener
    document.getElementById("logoutButton").addEventListener("click", () => {
        // Reset the form, display the login button, and hide the logout button
        document.forms[0].reset();
        document.getElementById("loginButton").style.display = "block";
        document.getElementById("logoutButton").style.display = "none";

        //hide the profile view
        document.getElementById("profileView").style.display = "none";

        //reset login greeting and form error
        document.getElementById("loginGreeting").innerText = "A Luxury Experience";
        document.getElementById("formError").innerText = "";
        document.getElementById("pleaseLogin").style.display = "block";
        document.getElementById("submitForm").style.display = "block";
    });
});
