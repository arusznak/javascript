
$(function() {

	$('button').on('click', function() {
		let price = $('<p>Már $399.99-tól</p>');
		
		$(this).after(price);
		$(this).remove();
	});

});
