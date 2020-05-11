
	window.addEventListener("load", function() {
		
		const mondat = "A nyomtató olyan eszköz, mely lassítja a papír haladását a szemetes felé.";
		let ujmondat = "";
		const hacker = {l : 1, o : 0, e : 3, s : 5, ó : 6, t : 7, g : 9};
		const hackerKeys = Object.keys(hacker);
		
		for(let i=0;i<mondat.length;i++) {
			if(hackerKeys.indexOf(mondat.charAt(i)) !== -1) {
				ujmondat += hacker[mondat.charAt(i)];
			} else {
				ujmondat += mondat.charAt(i);
			}
		}
		
		console.log(ujmondat);
	});