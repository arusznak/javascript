
$(function() {
	
	$('.vacation').on('focusout','.myComm',function() {
		let vacation = $(this).closest('.vacation');
		let comment = $("<li></li>").text($(this).val() + ' ').append($('<a></a>').addClass('delete').attr('href','#').text('[x]'));
		
		if(vacation.find('.comments').length == 0) {
			vacation.append($('<ul></ul>').addClass('comments'));
		}
		
		vacation.find('.comments').append(comment.hide().fadeIn());
		
		$(this).val("");
	});

	$('.vacation').on('click','.delete',function(event) {
		event.preventDefault();
		$(this).parent().fadeOut();
	});

});