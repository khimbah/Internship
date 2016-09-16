 jQuery(document).ready(function($) {

 	function isValidEmailAddress(emailAddress) {
    	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    	return pattern.test(emailAddress);
	};

    $('a.cssreset-subscribe').click(function(e) {
    	e.preventDefault();
    	var id = $(this).attr('data-id');
    	$('#cssreset-subscribe').find('.messages').html('');
    	$('#cssreset-subscribe input[name="id"]').val(id);
    	$('#cssreset-subscribe input[name="post_id"]').val($(this).parents('li').attr('data-id'));
    });

    $('#cssreset-subscribe').on('hidden.bs.modal', function(){
    	$(this).find('input').val('');
    	$(this).find('.messages').html('');
    });

    $('#cssreset-subscribe .subscribe.btn').click(function(e) {
    	e.preventDefault();
    	var parentEl = $(this).parents('#cssreset-subscribe');
    	var email = '';
        var email2 = '';
    	var downloadId = parentEl.find('input[name="id"]').val();
    	var postId = parentEl.find('input[name="post_id"]').val();
    	email = parentEl.find('input[name="email"]').val();
        email2 = parentEl.find('input[name="email2"]').val();
    	var button = $(this);
    	if(downloadId > 0) {

    	}
    	if(email != '') {
    		if(!isValidEmailAddress(email)) {
    			parentEl.find('input[name="email"]').css('border', '1px solid red');
    			parentEl.find('.messages').html('<div class="error">Invalid email address.</div>');
    		}
    		else {
                if(email != email2) {
                    parentEl.find('input[name="email2"]').css('border', '1px solid red');
                    parentEl.find('.messages').html('<div class="error">Email address mismatch.</div>');
                }
                else {
    			     button.attr('disabled', true);
    			     parentEl.find('.ajax-loader').show();
    			     var data = {
        			         'action': 'cssreset_download',
					       'id': downloadId,
					       'email' : email,
					       'post_id': postId
   				     };

   				     $.post('/wp-admin/admin-ajax.php', data, function(response) {
   				 		response = $.parseJSON(response);
   				 		button.removeAttr('disabled');
    					parentEl.find('.ajax-loader').hide();
        				if(response.success == 1) {
        				    parentEl.find('.messages').html('<div class="success">Download link has been sent to your email address!</div>');
        				}
        				else {
        					parentEl.find('.messages').html('<div class="error">Email could not be sent at this time.Please contact site administrator.</div>');
        				}
        				$('li[data-id="'+postId+'"] .count').text('(' + response.hit_count + ')');

    			     });
                }
    		}
    	}
    	else {
            if(email2 == '') {
                parentEl.find('input[name="email2"]').css('border', '1px solid red');
            }
    		parentEl.find('.messages').html('<div class="error">Email address is required.</div>');
    		parentEl.find('input[name="email"]').css('border', '1px solid red');
    	}
    });
 });