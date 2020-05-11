
window.addEventListener("load", function() {
	const A = parseInt(prompt("Kérem a téglalap a) oldalát:"));
	const B = parseInt(prompt("Kérem a téglalap b) oldalát:"));
		
	const K = 2 * (A + B);
	const T = A * B;
		
	alert("A téglalap kerülete: " + K + "m\nA téglalap területe: " + T + "m2");
});