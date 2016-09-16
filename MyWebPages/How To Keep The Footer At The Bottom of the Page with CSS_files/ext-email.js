(function($) {
	$(document).ready(function() {

		function isValidEmailAddress(emailAddress) {
    		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    		return pattern.test(emailAddress);
		}

		$('a.ext-email').click(function(e) {
			e.preventDefault();
            var hash = $(this).attr('data-hash');
            var name = $(this).attr('data-name');
            $('#ext-modal-form input[name="hash"]').val(hash);
            $('#ext-modal-form .link-name').text(name);
			$('#ext-modal-form').dialog({
 				 draggable: false,
 				 resizable: false,
 				 modal: true
			}); 
            console.log('test');
		});
		
		$('#ext-modal-form input[type="submit"]').click(function() {
			var parentEl = $('#ext-modal-form');
			var email = $('#ext-modal-form input[name="email"]').val();
			if(email != '') {
    			if(!isValidEmailAddress(email)) {
    				parentEl.find('input[name="email"]').css('border', '1px solid red');
    				parentEl.find('.messages').html('<div class="error">Invalid email address.</div>');
    			}
    			else {
    				$('#ext-modal-form input[type="submit"]').attr('disabled', true);
    				parentEl.find('.ajax-loader').show();
   				 	var data = {
                        'action': 'external_email_download',
                        'hash': parentEl.find('input[name="hash"]').val(),
                        'email' : email,
                     }; 

                 $.post('/wp-admin/admin-ajax.php', data, function(response) {
   				 			$('#ext-modal-form input[type="submit"]').removeAttr('disabled');
    						parentEl.find('.ajax-loader').hide();
        					if(response == 1) {
        				  		 parentEl.find('.messages').html('<div class="success">Successful!</div>');
        					}
        					else {
        						parentEl.find('.messages').html('<div class="error">Somthing went wrong.Please contact site administrator</div>');
        					}
    			 	});
    			}
    		}
    		else {
    			parentEl.find('.messages').html('<div class="error">Email address is required.</div>');
    			parentEl.find('input[name="email"]').css('border', '1px solid red');
    		}
		});

		$('#ext-modal-form').on('dialogclose', function(event, ui) {
			ui.find('input[name="email"]').val('');
			ui.find('.messages').html('');
			ui.find('.ajax-loader').hide();
		});

	});
})(jQuery);