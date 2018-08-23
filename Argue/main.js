// allows clicking of button 1 to show argument text
document.querySelector('#person1').onclick = function() {
	document.querySelector('#argument').innerHTML = "<h1>I'm Right!</h1>"
}

document.querySelector('#person2').onclick = function() {
	document.querySelector('#argument').innerHTML = "<h1>No, I'm Right!</h1>"
}


