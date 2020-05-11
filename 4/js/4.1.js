
	window.addEventListener("load", function() {
		
		function fajlok(fajlok) {
			this.fajlok = fajlok;
			this.hanyFajl = this.fajlok.length;
			this.listaz = function() {
				console.log(this.fajlok.join(", "));
			};
			this.torol = function(fajl) {
				if(this.fajlok.indexOf(fajl) != -1) {
					this.fajlok.splice(this.fajlok.indexOf(fajl),1);
					this.hanyFajl--;
				} else {
					console.log("Hibás fájlnév!");
				}
			};
			this.atnevez = function(reginev, ujnev) {
				if(this.fajlok.indexOf(reginev) != -1) {
					this.fajlok.splice(this.fajlok.indexOf(reginev),1, ujnev);
				} else {
					console.log("Hibás fájlnév!");
				}
			};
			this.letrehoz = function(fajl) {
				this.fajlok.push(fajl);
				this.hanyFajl++;
			}
		}
		
		let TCM = new fajlok(["tablazat.xls", "doksim.pdf", "jatek.exe"]);
		console.log(TCM.hanyFajl);
		TCM.letrehoz("paint.bmp");
		TCM.letrehoz("csaladom.jpg");
		TCM.letrehoz("denever.bat");
		console.log(TCM.hanyFajl);
		TCM.listaz();
		TCM.atnevez("jatek.exe","FarCRY.exe");
		TCM.listaz();
		
	});