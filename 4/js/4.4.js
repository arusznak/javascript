
class Kisallat {
	constructor(kisallat, kor, fajta, hang) {
		this.kisallat = kisallat;
		this.kor = kor;
		this.fajta = fajta;
		this.hang = hang;
	}
	
	beszel() {
		console.log(this.hang);
	}
	
	get tevekenyseg() {
		const ma = new Date();
		const ora = ma.getHours();
		return (ora > 8 && ora <= 20 ? 'játszik' : 'alszik');
	}
	set tulajdonos(gazdi) {
		this.gazdi = gazdi;
	}
	get tulajdonos() {
		return this.gazdi;
	}
}

class Gazdi{
	constructor(nev, cim) {
		this.nev = nev;
		this.cim = cim;
	}
	set telefon(telszam) {
		this.telszam = telszam.replace(/[^0-9]/g, '');
	}
	get telefon() {
		return this.telszam;
	}
}
