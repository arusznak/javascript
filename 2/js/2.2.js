
	window.addEventListener("load", function() {
		const dt = new Date();
		const ev = dt.getFullYear();
		let ho = dt.getMonth() + 1;
		const nap = dt.getDate();
		
		switch(ho) {
			case 1 : ho = "január"; break;
			case 2 : ho = "február"; break;
			case 3 : ho = "március"; break;
			case 4 : ho = "április"; break;
			case 5 : ho = "május"; break;
			case 6 : ho = "június"; break;
			case 7 : ho = "július"; break;
			case 8 : ho = "augusztus"; break;
			case 9 : ho = "szeptember"; break;
			case 10 : ho = "október"; break;
			case 11 : ho = "november"; break;
			case 12 : ho = "december"; break;
		}
		
		const datum = document.getElementById("datum");
		datum.innerText = ev + ". " + ho + " " + nap + ".";
	});