<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-type: text/plain; charset=utf-8');	
				
	if(isset($_POST['destination']) && isset($_POST['quantity'])) {
		switch($_POST['destination']) {
			case 1 : $destination = 'New York'; break;
			case 2 : $destination = 'Hawaii'; break;
			case 3 : $destination = 'Párizs'; break;
			default : $destination = 'nincs'; break;
		}
		
		$data = array(
				'destination' => $destination,
				'tickets'    => $_POST['quantity'],
				'id'       => '#' . mt_rand(1000,9999)
		);
		
		echo json_encode($data);
		
	} else {
		echo "Hiba...";
	}
?>