
function validateForm() {
	var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;


	// I'm incomplete...







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