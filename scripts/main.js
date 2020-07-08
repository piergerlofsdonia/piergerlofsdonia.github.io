/*

	1. When loaded, we need to see what mode is currently set. 
		a. Set the page to that colour scheme using classList.toggle IF the modes do not match.

*/

function loadMode() 
{
	var mode = localStorage.getItem("mode");
	var e = document.getElementById("mode-button");
	console.log(mode, e.innerText);
	if ( mode != e.value ) {
		setMode();
	} else {
		checkMode();
	}	
}

function setMode()
{
	var db = document.body;
	db.classList.toggle("dark-mode");
	swapMode();
	checkMode();
}

function checkMode()
{	
	var e = document.getElementById("mode-button");
	if ( e.value == "light" ) { 
		e.innerText = "Dark Mode";
	} else {
		e.innerText = "Light Mode";
	}
	
	localStorage.setItem("mode", e.value);
	console.log(e.innerText,localStorage.getItem("mode"));
}

function swapMode(e)
{
	var e = document.getElementById("mode-button");
	e.value = (e.value == "light") ? "dark" : "light";
}

window.onload = loadMode;
