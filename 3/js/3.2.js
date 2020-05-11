
	window.addEventListener("load", function() {
		
		// 1. részfeladat
		const szamok = [];
		let n = 1, szam = 0, kozepso, balra, jobbra;
		
		do {
			szam = parseInt(prompt("Kérem a(z) " + n + ". számot:"));
			
			if(!isNaN(szam)) {
				szamok.push(szam);
				n++;
			}
			
		} while(szamok.length < 5)
		
		szamok.sort(function(a, b) { return a-b; });
		
		kozepso = Math.round(szamok.length / 2)-1,
		balra = Math.abs(szamok[kozepso]-szamok[kozepso-1]), 
		jobbra = Math.abs(szamok[kozepso]-szamok[kozepso+1]);
		
		console.log(szamok.join(", "));
		console.log("Balra lévő: " + balra + ", jobbra lévő: " + jobbra);
		
		// 2. részfeladat:
		const elteres = szamok[kozepso];
		szamok[kozepso-1] = elteres - 3;
		szamok[kozepso+1] = elteres + 3;
		
		console.log("Eredmény: " + szamok.join(", "));
		
		// 3. részfeladat
		const legNagy = szamok[szamok.length-1];
		
		for(let i=0;i<szamok.length;i++) {
			szamok[i] = Math.round(szamok[i] / (legNagy/100));
		}
		
		console.log("Eredmény: " + szamok.join(", "));
		
		// 4. részfeladat
		let osszeg = 0, elemek = 0;

		do {
			szam = parseInt(prompt("Kérem a számot:"));
		} while(isNaN(szam) || (!isNaN(szam) && (szam > 100 || szam < 10)))
		
		for(i=0;i<szamok.length;i++) {
			if((osszeg + szamok[i]) <= szam) {
				osszeg += szamok[i];
				elemek++;
			}
		}
		console.log("A felhasználó bemenete: " + szam + "\nA szükséges elemek: " + elemek);
		
	});