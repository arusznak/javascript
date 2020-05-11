
$(function() {
	
	$('.vacation').on('click','.expand',function(event) {
		event.preventDefault();
		$(this).closest('.vacation').find('.comment'). fadeToggle ();
	});

});