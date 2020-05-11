
$(function() {
	
    $('.vacation').on('submit', 'form', function(e) {
      e.preventDefault();
      let form = $('form');
      let vacation = $(this).parent();
	  
      $.ajax({
		url: 'ajax/ajax_3.php',
        type: 'POST',
        /*data: {
          "destination" : $('#destination').val(),
          "quantity" : $('#quantity').val()
        },*/
		data: form.serialize(),
        success: function(response) {
          form.remove();
          vacation.hide().html(response).fadeIn();
        }
      });
	});

});