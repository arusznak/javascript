
$(function() {
	
	$('.vacation').on('keyup','.quantity',function() {
		let price = +$(this).closest('.vacation').data('price');
		let quantity = +$(this).val();
		
		$(this).parents('.vacation').find('span').text(price * quantity);
	});

});