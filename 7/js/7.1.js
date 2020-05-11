
$(function() {
	
	$('.vacation').on('click', 'button', function() {
      let button = $(this);
      let vacation = button.closest('.vacation');
      let ticket = vacation.find('.ticket');

      if(ticket.children().length === 0) {
        $.ajax('ajax/ajax_1.php', {
          success: function(response) {
            ticket.html(response).slideDown();
          }
        });
		
		/*$.get('ajax/ajax_1.php', function(response) {
		  ticket.html(response).slideDown();
		});*/
      }
    });

});