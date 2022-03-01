
/*content script*/

function replaceWordOn() {
	document.body.innerHTML = 
	document.body.innerHTML.replace(/music/gi, "rich people\'s yacht money")
	.replace(/economic/gi, "rich people\'s yacht money");
};



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message.txt);
	if (message.txt === "hello") {
		let replace = document.body.innerHTML = 
	document.body.innerHTML.replace(/economy/gi, "rich people\'s yacht money")
	.replace(/economic/gi, "rich people\'s yacht money");
	}
}


console.log('debug');