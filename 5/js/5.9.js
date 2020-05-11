
$(function() {
	
	$('#boxes').on('click','.vacation',function() {
		$(this).toggleClass('selected');
		$(this).find('.price').show();
		
		//$(this).find('.price').css('display','block');
	});

});