
$(function() {

	$('button').on('click', function() {
		let amount = $(this).closest('.vacation').data('price');
		let price = $('<p>Már $' + amount + '-tól.</p>');
		
		$(this).after(price);
		$(this).remove();
	});

});
