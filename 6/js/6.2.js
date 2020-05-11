
$(function() {
	
	$('.vacation').on('mouseenter','input',function() {
		$(this).attr('disabled',false);
	});
		
	$('.vacation').on('click','button',function() {
		let opinion = $('#opinion');
		let id = $('#id').val();
			
		if(opinion.val() != "") {
			if((id > 0 && id < 3)) {
				let span = $("<span></span>").text(opinion.val() + " ");
				let a = $("<a></a>").addClass("del").attr("href","#").text("[d]");
				let li = $("<li></li>").append(span).append(a);
				
				$('.vacation').eq(id).find('.comments').prepend(li);
				opinion.val('');
			} else alert("A beszúrás helye nem megfelelő!");
		} else alert("Üres hozzászólás nem küldhető be!");
	});
		
	$('.vacation').on('click','.del',function(e) {
		e.preventDefault();
		$(this).parent().remove();
	});

});