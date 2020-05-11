
	window.addEventListener("load", function() {
		
		const nev = prompt("Kérem a teljes neved:").toLowerCase(),
		tiltott = {
			á: "a", é: "e", í: "i", ó: "o", ö: "o", ő: "o", ú: "u", ü: "u", ű: "u", ".":"", " ": "."
		},
		tiltottKulcsok = Object.keys(tiltott);
		let ujnev = "";
		
		for(let i=0;i<nev.length;i++) {
			if(tiltottKulcsok.indexOf(nev.charAt(i)) !== -1) {
				ujnev += tiltott[nev.charAt(i)];
			} else {
				ujnev += nev.charAt(i);
			}
		}
				
		console.log("Az e-mail cím: " + ujnev + "@szte.hu");
		
	});