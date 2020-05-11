
$(function() {
	
$('.vacation').on('click', 'button', function() {
  let button = $(this);
  let vacation = button.closest('.vacation');
  let ticket = vacation.find('.ticket');
  let id = vacation.data('id');

  if(ticket.children().length === 0) {
	$.ajax({
	  url: 'ajax/ajax_1.php',
	  data: {
        "flightNum" : id
      },
	  success: function(response) {
		ticket.html(response).slideDown();
	  }
	});
  }
});

});