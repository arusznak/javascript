
$(function() {
	
    let id;

    $('.vacation').on('click', '.modify', function(e) {
      e.preventDefault();
      let li = $(this).parent();
      let input = li.parents('.vacation').find('input');
      id = li.data('id');
      input.css('background-color', 'white');

      input.attr('disabled', false);
      input.val(li.text().substring(0,li.text().length-8));
    });

    $('.vacation').on('focusout', 'input', function() {
      let that = $(this);
      that.attr('disabled', true);
      let vacation = that.parents('.vacation');

      if(that.val().length !== 0) {
        vacation.find('.comments').find('li').each(function() {
          if(id === $(this).data('id')) {
            $(this).html(that.val() + " <a class='modify' href='#'>[m]</a> <a class='del' href='#'>[d]</a>");
          }
        });
        that.val('');
      } else {
        that.css('background-color', 'red');
      }
    });

    $('.vacation').on('click', '.del', function(e) {
      e.preventDefault();
      $(this).parent().remove();
    });

});