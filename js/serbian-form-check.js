const form = document.getElementById("contactForm");

const Name = document.getElementById("formName");
const Email = document.getElementById("formEmail");
const Subject = document.getElementById("formSubject");
const TextInput = document.getElementById("formText");

const errorMsgBox = document.getElementById("formErrorMsg");

function addErrorMessage(errorMsg) {
    if(errorMsgBox.innerHTML == "")
        errorMsgBox.innerHTML = errorMsg;
    else {
        errorMsgBox.innerHTML += `,<br>${errorMsg}`;
    }
}

function clearErrorBox() {
    errorMsgBox.innerHTML = "";
}

function isEmpty(input) {
    if(input.value == "") {
        // addErrorMessage(`${input.name} cannot be empty`);
        return false;
    } else {
        return true;
    }
}

function hasMinChars(input, length) {
    if(input.value.length <= length) {
        addErrorMessage(`${input.name} mora biti duze od ${length} karaktera`);
        return false;
    } else {
        return true;
    }
}

function isEmailValid(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const valid = emailRegex.test(email);
    if(valid)
        return true;
    else {
        addErrorMessage("Vas email ne valja");
        return false;
    }
}

function valid(input) {
    let valid = false;
    let hasMin;
    let emailValid = false;
    const exists = isEmpty(input);
    switch (input.id) {
        case "formName":
            hasMin = hasMinChars(input, 3);
            valid = exists && hasMin;
            break;
        case "formEmail":
            // hasMin = hasMinChars(input, 3);
            emailValid = isEmailValid(input.value);
            valid = exists && emailValid;
            break; 
        case "formSubject":
            hasMin = hasMinChars(input, 3);
            valid = exists && hasMin;
            break;
        case "formText":
            hasMin = hasMinChars(input, 10);
            valid = exists && hasMin;
            break; 
    }
    return valid;
}

function submitFunction(event) {
    event.preventDefault();

    clearErrorBox();

    const nameValid = valid(Name);
    const emailValid = valid(Email);
    const subjectValid = valid(Subject);
    const textValid = valid(TextInput);

    if(nameValid && emailValid && subjectValid && textValid)
        alert("Cestitam");
}

form.addEventListener("submit", submitFunction);