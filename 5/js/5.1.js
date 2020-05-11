
$(function() {

	$('button').on('click', function() {
		let price = $('<p>Már $399.99-tól</p>');
		
		$('.vacation').first().find('h2').after(price);
		$('button').remove();
	});

});
