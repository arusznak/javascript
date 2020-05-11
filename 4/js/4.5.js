
class Olvaso {
	constructor(nev, email) {
		this.nev = nev;
		this.email = email;
		this.konyv = null;
		this.egyenleg = 0;
	}
	kolcsonoz(konyv) {
		this.konyv = konyv;
		konyv.olvaso = this;
		konyv.kolcsonozve = true;
	}
	visszahoz(konyv) {
		this.konyv = null;
		konyv.olvaso = null;
		konyv.kolcsonozve = false;
	}
}

class Konyv {
	constructor(cim, szerzo, isbn, kiadva) {
		this.cim = cim;
		this.szerzo = szerzo;
		this.isbn = isbn;
		this.kiadva = kiadva;
		this.olvaso = null;
		this.lejar = null;
		this._kolcsonozve = false;
	}
	set kolcsonozve(kolcsonozve) {
		this._kolcsonozve = kolcsonozve;			
		if(this._kolcsonozve) {
			const ujLejarat = new Date();
			ujLejarat.setDate(ujLejarat.getDate() + 14);
			this.lejar = ujLejarat;
		} else {
			this.lejar = null;
		}
	}
	get kolcsonozve() {
		return this._kolcsonozve;
	}
}

class Konyvtar {
	constructor() {
		this.konyvek = [];
		this.olvasok = [];
		this.napiBuntetes = 50;
	}
	ujKonyv(konyv) {
		this.konyvek.push(konyv);
	}
	ujOlvaso(olvaso) {
		this.olvasok.push(olvaso);
	}
	lejartKonyvek() {
		const most = new Date();
		const kesettOlvasok = this.olvasok.filter(olvaso => 
		(olvaso.konyv !== null && olvaso.konyv.lejar < most));
		for(let olvaso of kesettOlvasok) {
			const datumKulonbseg = new Date(most - olvaso.konyv.lejar);
			const kesettNapok = datumKulonbseg.getDate();
			olvaso.egyenleg += this.napiBuntetes * kesettNapok;
		}
	}
}
