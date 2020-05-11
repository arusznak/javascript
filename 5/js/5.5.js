
$(function() {
	
	const vacation = $('.vacation');
	
	console.log(vacation);

	$('#filters').on('click', '.onsale-filter', function() {
		vacation.removeClass('highlighted');
		vacation.filter('.onsale').addClass('highlighted');		
	});
	
	$('#filters').on('click', '.expiring-filter', function() {
		vacation.removeClass('highlighted');
		vacation.filter('.expiring').addClass('highlighted');
	});

});
