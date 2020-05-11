<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-type: text/plain; charset=utf-8');
	
	sleep(3);
	
	if(isset($_GET['flightNum'])) {
		switch($_GET['flightNum']) {
			case 1 : echo "<li><span>Érkezés:</span> John F. Kennedy IA</li><li><span>Felszállás:</span> 2018. február 20. 09:30-kor</li><li><span>Repülő száma:</span> 815</li>"; break;
			case 2 : echo "<li><span>Érkezés:</span> Budapest Ferihegy</li><li><span>Felszállás:</span> 2018. március 11. 12:40-kor</li><li><span>Repülő száma:</span> 622</li>"; break;
			default : echo "<li><span>Érkezés:</span> -</li><li><span>Felszállás:</span> -</li><li><span>Repülő száma:</span> -</li>"; break;
		}
	} else {
		echo "<li><span>Érkezés:</span> London</li><li><span>Felszállás:</span> 2018. január 5.</li><li><span>Repülő száma:</span> 134</li>";
	}
?>