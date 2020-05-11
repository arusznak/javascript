
class Jarmu {
	constructor(rendszam) {
		this.rendszam = rendszam;
		this.gpsBekapcsolva = true;
	}

	start() {
		console.log('A jármű indítása...');
	}

	static cegNev() {
		console.log('Jármű ACME');
	}
}

class Auto extends Jarmu {
	constructor(rendszam) {
		super(rendszam);
		this.gpsBekapcsolva = false;
	}
	
	start() {
		console.log('Az autó indítása...');
	}
	
	static cegNev() {
		console.log('Autó ACME');
	}
}
