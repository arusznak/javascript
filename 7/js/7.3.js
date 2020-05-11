
$(function() {
	
$('.vacation').on('click', 'button', function() {
  let button = $(this);
  let vacation = button.closest('.vacation');
  let ticket = vacation.find('.ticket');

  if(ticket.children().length === 0) {
    $.ajax({
		url: 'ajax/ajx_2.php',
	    success: function(response) {
			ticket.html(response).slideDown();
		},
		error: function(request, errorType, errorMessage) {
			console.log("Hiba típusa: " + errorType + "\nHibaüzenet: " + errorMessage);
		},
		beforeSend: function() {
			button.text('Töltés...');
			button.css('background-color', 'white');
			button.attr('disabled', true);
		},
		complete: function() {
			button.text('Repülés részletei');
			button.css('background-color', '#69C84A');
			button.attr('disabled', false);
		},
		//timeout: 2000
	});
  }
});

});