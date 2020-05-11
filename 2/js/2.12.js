
	window.addEventListener("load", function() {
		
		let email = prompt("Kérek egy e-mail címet:"),
		kukac = email.indexOf("@") + 1,
		pont = email.lastIndexOf(".");
		
		console.log("Az első megoldás: " + email.substring(kukac, pont));
		console.log("A második megoldás: " + email.substr(kukac ,Math.abs(kukac - pont)));

	});