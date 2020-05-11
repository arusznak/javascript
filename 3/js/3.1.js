
	window.addEventListener("load", function() {
		
		// 1. részfeladat
		let szamok = [], n = 1, szam = 0;
		do {
			szam = parseInt(prompt("Kérem a(z) " + n + ". számot (0 és 50 között):"));
			
			if(!isNaN(szam) && (szam >= 0 && szam <= 50)) {
				szamok.push(szam);
				n++;
			}
		} while(szamok.length < 5)
					
		for(let i=0; i<szamok.length;i++) {
			szamok[i] *= 2;
		}
		
		console.log("Eredmény: " + szamok.join(", "));
		
		// 2. részfeladat
		let osszeg = 0;
		const tombHossz = szamok.length;
		
		for(let i=0; i<tombHossz;i++) {
			osszeg + szamok[i] <= 55 ? osszeg += szamok[i] : szamok.pop();
		}
		console.log("Eredmény: " + szamok.join(", "));
		
		// 3. részfeladat		
		osszeg = 0;
		for(let i=0;i<szamok.length;i++) {
			osszeg += szamok[i];
		}
		szamok.push(100-osszeg);
		console.log("Eredmény: " + szamok.join(", "));
		
		// 4. részfeladat
		let szamok2 = [];

		for(let i=0;i<szamok.length;i++) {
			szamok2.push(szamok[i] /= 2);
		}
		
		console.log("Eredmény:\nSzázalék értékek: " + szamok.join(", ") + "\nEredeti értékek: " + szamok2.join(", "));
	});