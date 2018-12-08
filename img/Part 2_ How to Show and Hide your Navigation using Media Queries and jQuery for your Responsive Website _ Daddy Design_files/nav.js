jQuery(document).ready(function() {
	jQuery('#nav_btn').on('click', function(e){
		if( jQuery('#nav').is(':visible') ) { 
		    jQuery(this).removeClass('active');
			jQuery('#nav').slideUp('fast', 'swing');
		}
		if( jQuery('#nav').is(':hidden') ) {
			jQuery(this).toggleClass('active');
			jQuery('#nav').slideDown('fast', 'swing');
		}
		e.preventDefault();
	});
	jQuery(window).resize(function() {
		if( jQuery('#nav_btn').is(':hidden') ) {
			jQuery('#nav').removeAttr("style");
		}
		if( jQuery('#nav_btn.active').is(':visible') ) {
			jQuery('#nav').show();
		}
	});
});