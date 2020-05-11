
$(function() {
	
	const vacation = $('.vacation');
	
	vacation.on('click', 'button',showTicket);
	vacation.on('mouseenter', 'h2', showTicket);
	
	function showTicket() {
		$(this).closest('.vacation').find('.ticket').slideToggle();
	}
	
	/*vacation.on('click', 'button', function() {
		showTicket($(this));
	});
	vacation.on('mouseenter', 'h2', function() {
		showTicket($(this));
	});
	
	showTicket = (that) => that.closest('.vacation').find('.ticket').slideToggle();*/

});