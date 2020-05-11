
$(function() {

	$('button').on('click', function() {
		let price = $('<p>Már $399.99-tól</p>');
		
		$(this).parents('.vacation').append(price);
		$(this).remove();
	});

});
