
	window.addEventListener("load", function() {
		
		const palindrom = document.getElementById("palindrom");
		const mondat = prompt("Kérek egy mondatot:");
		let betuk = "", forditott = "";
		const tiltott = [" ", ".", ",", "?", ":", "!"];

		if(mondat !== null) {
			for(let i=0;i<mondat.length;i++) {
				if(tiltott.indexOf(mondat.charAt(i)) === -1) {
					betuk += mondat.charAt(i).toLowerCase();
				}
			}
						
			for(let j=betuk.length-1;j>=0;j--) {
				forditott += betuk.charAt(j);
			}
			
			palindrom.innerHTML = forditott
			
			if(betuk === forditott) palindrom.style.color = "green";
			else palindrom.style.color = "red";
		}
		
	});