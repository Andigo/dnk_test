jQuery(function($) {
    "use strict"
    $('.firstsec-quest img').on('click', function(){
    	if($(this).hasClass('active')){
    		$(this).removeClass('active');
        	$(this).parent().parent().children('.firstsec-ans').slideUp(200);
    	}else{
    		$('.firstsec-quest img').removeClass('active');;
        	$('.firstsec-ans').slideUp();
        	$(this).addClass('active');
        	$(this).parent().parent().children('.firstsec-ans').css('display', 'flex');
    	}
        
   });
});