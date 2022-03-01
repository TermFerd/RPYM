/*document.getElementById("myButton").addEventListener("click", replaceWordOn);*/

function replaceWordOn() {
	document.body.innerHTML = 
	document.body.innerHTML.replace(/economy/gi, "rich people\'s yacht money")
	.replace(/economic/gi, "rich people\'s yacht money");
};

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: {tabId: tab.id},
		files: ['popup.js']
	});
});

