
	window.addEventListener("load", function() {
		
		const szazig = [];
		let osszeg = 0, szam = 0;
		
		do {
			szam = parseInt(prompt("Kérek egy számot:"));
			if(!isNaN(szam)) {
				if(osszeg + szam <= 100) {
					szazig.push(szam);
					osszeg += szam;
				} else break;
			}
		} while(osszeg <= 100);
		
		console.log("A tömb elemei: " + szazig.join(", ") + 
		"\nA számok összege: " + osszeg);

	});