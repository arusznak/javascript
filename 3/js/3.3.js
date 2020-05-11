
	window.addEventListener("load", function() {
		
		// 1. részfeladat
		const szamok = [];
		let szam = 0;
		
		do {
			szam = parseInt(prompt("Kérek egy számot:"));
		} while(isNaN(szam));
		
		for(let i=0; i<5; i++) {
			szamok.push(szam * Math.pow(2,(i+1)));
		}
		
		console.log("Eredmény: " + szamok.join(", "));
		
		// 2. részfeladat
		const legNagy = szamok.length-1, 
		kozepso = Math.ceil(szamok.length/2)-1;
		let temp = szamok[kozepso];
		
		szamok[kozepso] = szamok[legNagy];
		szamok[legNagy] = temp;
		
		console.log("Eredmény: " + szamok.toString());
		
		// 3. részfeladat
		let minElem = maxElem = szamok[0];
				
		for(i=0; i<szamok.length; i++) {
			minElem = Math.min(minElem,szamok[i]);
			maxElem = Math.max(maxElem,szamok[i]);
		}
		
		console.log("A két szám közötti különbség: " + Math.abs(minElem-maxElem));
		
		// 4. részfeladat
		let kisSzazalek = 100;
		for(i=0;i<szamok.length;i++) {
			szamok[i] /= (maxElem/100);
			if(szamok[i] < kisSzazalek) {
				kisSzazalek = szamok[i];
			}
		}
		console.log(100-kisSzazalek + "% különbség van a legnagyobb és legkisebb elem között.");
		
	});