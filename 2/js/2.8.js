
	window.addEventListener("load", function() {
		
		let szam = 0, paros = [], paratlan = [], szorzat = 1, atlag = 0;
		const eredmeny = document.getElementById("eredmeny");
		
		do {
			szam = parseInt(prompt("Kérek egy számot:"));
			if(!isNaN(szam) && szam !== 0) {
				(szam % 2 === 0 ? paros.push(szam) : paratlan.push(szam));
			}
		} while(szam !== 0);
		
		const max = Math.max(paros.length, paratlan.length);
		
		paros.forEach((elem) =>  szorzat *= elem);
		
		paratlan.forEach((elem) => atlag += elem);
		atlag /= paratlan.length;
		
		eredmeny.innerHTML = "A páros számok: " + paros.join(", ") + 
		"<br>A páratlan számok: " + paratlan.join(", ") + 
		"<br>A hosszabb tömb elemeinek száma: " + max + 
		"<br>A páros számok szorzata: " + szorzat + 
		"<br>A páratlan számok átlaga: " + atlag;
			
	});