
$(function() {
	
    $('.vacation').on('submit', 'form', function(e) {
      e.preventDefault();
      let form = $('form');
      let vacation = $(this).parent();
	  
	  $.ajax({
		url: 'ajax/ajax_4.php',
		type: 'POST',
		data: form.serialize(),
		dataType: 'json',
		success: function(response) {
		  form.remove();
		  let ul = $('<ul></ul>');
		  ul.append('<li>Foglalás: ' + response.destination + '</li>');
		  ul.append('<li>Jegyek száma: ' + response.tickets + '</li>');
		  ul.append('<li>Azonosító: ' + response.id + '</li>');
		  vacation.hide().html(ul).fadeIn();
		}
	  });
	});

});