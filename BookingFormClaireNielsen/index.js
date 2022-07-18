// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");


const FIRSTNAME_REQUIRED = "Please enter your first name";
const LASTNAME_REQUIRED = "Please enter your last name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter correct email address format";
const DESTINATION_REQUIRED = "Please select departure city"
const DEPARTURE_REQUIRED = "Please select departure city"

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
    let firstnameValid = hasValue(form.elements["firstname"], FIRSTNAME_REQUIRED);
    let lastnameValid = hasValue(form.elements["lastname"], LASTNAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    let destinationValid = hasValue(form.elements["destination"], DESTINATION_REQUIRED);
    let departureValid = hasValue(form.elements["departure"], DEPARTURE_REQUIRED);

	// if valid, submit the form.
	if (firstnameValid && lastnameValid && emailValid && departureValid && destinationValid) {
		alert("Success!, you have booked.");
	}
});