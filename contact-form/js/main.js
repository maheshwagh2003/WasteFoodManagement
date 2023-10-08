function sendEmail(){
	Email.send({
		SecureToken : "6fb19ae6-2d28-46f6-804d-d6640c6818d8",
		To : document.getElementById("email").value,
		// To : "maheshwagh979@gmail.com",
		From : 'maheshwagh979@gmail.com',
		Subject : "Form Submitted Successfully.",
		Body : "Name: " + document.getElementById("name").value
			+ "<br> Email: " + document.getElementById("email").value
			+ "<br> Subject: " + document.getElementById("subject").value
			+ "<br> Message: " + document.getElementById("message").value
			}).then(
	  message => alert(message)
	);
}
