
	window.addEventListener("load", function() {
		
		let general, tablazat = "<table border=\"1\">";
		const oszlopok = parseInt(prompt("Kérem az oszlopok számát:")),
		sorok = parseInt(prompt("Kérem a sorok számát:"));
		
		for(let i=0;i<oszlopok;i++) {
			tablazat += "<tr>";
			for(let j=0;j<sorok;j++) {
				tablazat += "<td>" + (Math.floor(Math.random() * (100 - 1 + 1)) + 1) + "</td>";
			}
			tablazat += "</tr>";
		}
		tablazat += "</table>";
		
		document.body.innerHTML = tablazat;

	});