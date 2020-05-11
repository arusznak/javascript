
	window.addEventListener("load", function() {
			
		function lotto(huzas, min, max, tipp) {
			this.huzas = huzas;
			this.min = min;
			this.max = max;
			this.tipp = tipp;
			this.gepi = [];
			this.talalat = 0;
			this.sorsolasok = 0;
			this.general = function() {
				while(this.gepi.length < this.huzas) {
					let gen = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
					if(this.gepi.indexOf(gen) == -1) {
						this.gepi.push(gen);
					}
				}
				this.sorsolasok++;
			};
			this.ellenoriz = function() {
				for(let i=0;i<this.gepi.length;i++) {
					if(this.gepi.indexOf(tipp[i]) != -1) {
						this.talalat++;
					}
				}
			};
			this.kiir = function() {
				console.log("A sorsolások száma: " + this.sorsolasok + 
				"\nA játékos tippjei: " + this.tipp.sort(function(a,b) {return a-b;}).join(", ") + 
				"\nA kihúzott számok: " + this.gepi.sort(function(a,b) {return a-b;}).join(", ") + 
				"\nA találatok száma: " + this.talalat + 
				"\n--------------------------------------------------");
			}
		}
		
		let otos = new lotto(5, 1, 90, [3, 25, 30, 40, 50]);
		
		// 1. sorsolás
		otos.general();
		otos.ellenoriz();
		otos.kiir();
		
		// 2. sorsolás
		otos.tipp = [5, 1, 45, 40, 48];
		otos.general();
		otos.ellenoriz();
		otos.kiir();
		
		// létrehozom a 6-os lottó objektumát
		let hatos = new lotto(6, 1, 45, [2, 14, 29, 35, 40]);
		
		// 1. sorsolás
		hatos.general();
		hatos.ellenoriz();
		hatos.kiir();
		
	});