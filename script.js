function validEmail(str) {
  //your JS code here.
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const isValidEmail = emailRegex.test(str);
	return isValidEmail;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
