
function validateForm() {
	var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

	var title = document.querySelector('#title').value;
	var description = document.querySelector('#description').value;
	var price = document.querySelector('#price').value;
	var isbn = document.querySelector('#isbn').value;
	var datePublished = document.querySelector('#datePublished').value;
	var genre = document.querySelector('#genre').value;
	var authorName = document.querySelector('#authorName').value;
	var authorEmail = document.querySelector('#authorEmail').value;

	// Required
	if (!validateRequiredField(title)) {
		alert('Title required!');
		return false;
	}
	if (!validateRequiredField(price)) {
		alert('Price required!');
		return false;
	}
	if (!validateRequiredField(isbn)) {
		alert('ISBN required!');
		return false;
	}
	if (!validateRequiredField(datePublished)) {
		alert('Date Published required!');
		return false;
	}
	if (!validateRequiredField(genre)) {
		alert('Genre required!');
		return false;
	}
	if (!validateRequiredField(authorName)) {
		alert('Author Name required!');
		return false;
	}
	if (!validateRequiredField(authorEmail)) {
		alert('Author Email required!');
		return false;
	}

	// Currency range
	if (!validateCurrencyField(price)) {
		alert('Price must be between $0 and $199.99');
		return false;
	}

	// Character length
	if (!validateTextField(title, 3, 200)) {
		alert('Title must be between 3 and 200 characters');
		return false;
	}
	if (!validateTextField(authorName, 3, 100)) {
		alert('Author Name must be between 3 and 100 characters');
		return false;
	}
	if (!validateTextField(authorEmail, 3, 100)) {
		alert('Author Email must be between 3 and 100 characters');
		return false;
	}

	// Email format
	if (!validateRegex(authorEmail, emailRegex)) {
		alert('Author Email must be in a valid email format');
		return false;
	}

	// Date format
	if (!validateRegex(datePublished, dateRegex)) {
		alert('Date Published must be in a valid date format');
		return false;
	}


	alert('Form valid! Yay.');

	return false;
}

function validateRequiredField(value) {

	// HINT: use helper functions like this to separate validation rules into re-usable functions
	
	if (value !== undefined && value !== null && value !== '') {
		return true;
	}

	return false;
}

function validateCurrencyField(value) {

	var currency = parseFloat(value);

	if (currency >= 0 && currency < 200) {
		return true;
	}

	return false;
}

function validateTextField(value, minLength, maxLength) {
	var valueLength = value.length;

	if (valueLength >= minLength && valueLength <= maxLength) {
		return true;
	}

	return false;
}

function validateRegex(value, expression) {
    
    if (expression.test(value)) {
    	return true;
    }

    return false;
}