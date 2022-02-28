/*document.getElementById("myButton").addEventListener("click", replaceWordOn);*/

function replaceWordOn() {
	document.body.innerHTML = 
	document.body.innerHTML.replace(/economy/gi, "rich people\'s yacht money")
	.replace(/economic/gi, "rich people\'s yacht money");
};

chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.executeScript(null, {
		file: 'popup.js'
	});
});

