
	window.addEventListener("load", function() {
			
		function fajlok(fajlok) {
			this.fajlok = fajlok;
			this.nevHossz = function(fajl) {
				if(this.fajlok.indexOf(fajl) != -1) console.log("A fájl (" + fajl + ") " + fajl.length + " karakter hosszú.");
				else console.log("Nem található a fájl!");
			};
			this.csakNev = function(fajl) {
				if(this.fajlok.indexOf(fajl) != -1) console.log(fajl.substr(0,fajl.lastIndexOf(".")));
				else console.log("Nem található a fájl!");
			};
			this.rendez = function() {
				this.fajlok.sort();
			};
			this.tipus = function(fajl) {
				if(this.fajlok.indexOf(fajl) != -1) {
					let kiterj = fajl.substr(fajl.lastIndexOf(".")+1);
					let tipus = "";

					switch(kiterj) {
						case "docx" : tipus = "szöveges"; break;
						case "exe" : tipus = "futtatható"; break;
						case "mp3" : tipus = "zene"; break;
						case "avi" : tipus = "videó"; break;
						default : tipus = "ismeretlen";
					}
					console.log("A fájl (" + fajl + ") típusa: " + tipus);
				} else console.log("Ismeretlen fájltípus!");
			}
		}
		
		let TCM = new fajlok(["vers.docx", "alma.zip", "csalad.jpg", "game.exe"]);
		TCM.nevHossz(TCM.fajlok[1]);
		TCM.rendez();

		for(let i=0;i<TCM.fajlok.length;i++) {
			TCM.csakNev(TCM.fajlok[i]);
		}
		
		TCM.tipus(TCM.fajlok[3]);
	});