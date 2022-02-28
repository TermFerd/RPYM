
function replaceWordOn() {
	document.body.innerHTML = 
	document.body.innerHTML.replace(/economy/gi, "rich people\'s yacht money")
	.replace(/economic/gi, "rich people\'s yacht money");
};

document.getElementById("myButton").addEventListener("click", replaceWordOn);