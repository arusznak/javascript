
	window.addEventListener("load", function() {
		
		const email = document.getElementById("email");
		let mail = "labamkozottvanegy@gmail.com";
		let encrypted = "";
		
		for(let i=0;i<mail.length;i++) {
			encrypted += "&#" + mail.charCodeAt(i) + ";";
		}
		
		email.innerHTML = encrypted;
		console.log(encrypted);

	});