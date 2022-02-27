function replaceWordOn() {
	document.body.innerHTML = 
	document.body.innerHTML.replace(/economy/gi, "rich people\'s yacht money");
};

function onoff(){
	let yachtifyOn = replaceWordOn();
	currentvalue = document.getElementById('onoff').value;
	if(currentvalue == "Yachtify Off"){
	document.getElementById("onoff").value="Yachtify On";
 	  }else{
    document.getElementById("onoff").value="Cannot Unsee!";
    };
};