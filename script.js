// Single line comment: TODOs short notes, e.t.c

/* Multiline Comment: Description 
    This is JavaScript
*/

// Variables and Functions

// Variables are containers (memory location) that stores a value
// const PI = 3.142; // Constants

// Constants: A type of variable that doesn't, it remains constant throughout the program's lifetime

// DOM: Document Object Model

// Ways of defining a variable:

// Functions are lines of statement or code used to perform a specific task.

// Let: Define a variable that can be changed
// Var: Similar to let, only that it is used in a block and not outside a block
/* example: 
    function functionName() {
        var variableName = variableValue;
    }
    variableName=newValue; //error
*/
// Const: Define a variable that remains constant and cannot be changed

// Naming Convention: camelCase PascalCase snake_case

// Data types and data structures in JavaScript

// Data types: String, Integer or Number, Boolean, Undefined, Null.

// Data Structure: Arrays, Objects, object or arrays, Array of objects, e.t.c


// Variables

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");

const emailAddress = document.getElementById("email-address");

const queryTypes = document.getElementsByClassName("query-type");

const messageTextArea = document.getElementById("message");

const consentCheckbox = document.getElementById("consent"); // a value of true or false

const allErrorMessages = document.querySelectorAll('.error-message');

const submitButton = document.getElementById("submit-button");

const submitForm = document.getElementById("contact-form");

// Functions

   //  Functions are of different types as:

    // Void Functions: They don't return a value but they perform an action e.g a function that redirects a user to the homepage after signing up.
    // function navigateToHomePage() {
    //     // Navigate the user to the homepage
    // }

    // Return Value functions: They return a value (They might perform an action or not, and return a value) --> Returning a value is their main function
    // function calculateAge() {
    //     let age = currentYear - yearOfBrith;
    //     return age;
    // }
    // calculateAge();

    // Functions with parameters: They take parameters as arguments, they can either return a value or perform an action or do both or even do none.
    // function printMessageToUser(userName, message) {
    //     // return "Username: " + userName + " " + "Message: " +  message; //template string literals

    //     return `Username: ${userName}. Message: ${message}`;
    // }

// lastName, emailAddress, queryTypes, message, consentCheckbox

function validateAllInputs(firstName, lastName, emailAddress, queryTypes, messageTextArea, consentCheckbox) {
    /* this function does the following:
     - takes in all the inputs, 
     - validates (checks if there are errors: empty input or invalid format them 
     - return boolean values (true or false) if each of the inputs is valid or not.
    */
    

    //  Validation variables
     let isFirstNameValid;
     let isLastNameValid;
     let isEmailAddressValid;
     let isQueryTypesValid;
     let isMessageTextAreaValid;
     let isConsentCheckboxValid;

    // Validating firstNameInput
    if (firstName.value == "") {
        isFirstNameValid = false;
    } else {
        isFirstNameValid = true;
    }

    // Validating lastNameInput
    if (lastName.value == "") {
        isLastNameValid = false;
    } else {
        isLastNameValid = true;
    }

    // Validating emailAddressInput
    if (emailAddress.value == "") {
        isEmailAddressValid = false;
    } else {
        isEmailAddressValid = true;
    }

    // for (let i = 0; i <= queryTypes.length; i++) {
    //     // Your function is ran here
    // }

    // Logical Operators: AND, OR, NOT

    // AND: Returns True, if both sides are true &&
    // OR: Returns True, if either sides are true ||
    // NOT: Returns the opposite of the boolean value e.g NOT True = False !

    // Validating queryTypesRadioButtons
    if (queryTypes[0].checked || queryTypes[1].checked) {
        isQueryTypesValid = true;
    } else {
        isQueryTypesValid = false;
    }

    // Validating messageInput
    if (messageTextArea.value == "") {
        isMessageValid = false;
    } else {
        isMessageTextAreaValid = true;
    }

    // Validating consentCheckbox
    if (!consentCheckbox.checked) {
        isConsentCheckboxValid = false;
    } else {
        isConsentCheckboxValid = true;
    }

    // An array to return the validation state of each input elements when form is being submitted
    return [
        isFirstNameValid, 
        isLastNameValid,
        isEmailAddressValid,
        isQueryTypesValid,
        isMessageTextAreaValid,
        isConsentCheckboxValid
    ]
}
