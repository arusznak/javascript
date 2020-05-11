
	window.addEventListener("load", function() {
		
		const lotto = [];
		let general;
		
		do {
			general = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
			if(lotto.indexOf(general) === -1) {
				lotto.push(general);
			}
		} while(lotto.length < 5);
		
		lotto.sort();
		
		console.log("A generált számok: " + lotto.join(", "));
		
	});