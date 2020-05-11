
	window.addEventListener("load", function() {
		
		const general = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
		let tipp, probalkozasok = 0;
		
		do {
			tipp = prompt("Melyik számra gondoltam 1 és 20 között?");
			if(tipp !== null) {
				tipp = parseInt(tipp);
				probalkozasok++;
			} else {
				alert("Köszönjük a játékot!");
				break;
			}
		} while(tipp !== general);
		
		alert("A gondolt szám: " + general + "\nA próbálkozások száma: " + probalkozasok);
	});