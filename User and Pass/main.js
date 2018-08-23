document.querySelector('#submit').onclick = function() {
	var loggedIn = false;
	var requiredPassword = '12345678';
	var pass = document.querySelector('#password').value;
	var user = document.querySelector('#user').value;

	if(pass === requiredPassword && user.length < 14) {
		loggedIn = true;
	} else {
		alert('incorect username or password');
	}

	if(loggedIn === true) {
		document.querySelector('h1').innerText = 'Congrats on knowing your username and password!'
	}

}
