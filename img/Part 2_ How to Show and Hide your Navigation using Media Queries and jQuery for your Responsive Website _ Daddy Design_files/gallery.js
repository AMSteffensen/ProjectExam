function open_modal(){
	jQuery('body').prepend('<div id="modal"><div id="mask"></div><div class="modal_window close_modal"></div></div>');
	jQuery('#mask').fadeTo('slow', 0.9);
	jQuery('#modal, .modal_window').fadeIn(500);
	
}

function close_modal(){
	jQuery('.gallery_item').removeClass('current_gallery_item');
	jQuery('.gallery_item').removeClass('next_gallery_item');
	jQuery('.gallery_item').removeClass('prev_gallery_item');
	jQuery('#modal, #mask, .modal_window, .controls').fadeOut(500, function(){ jQuery('#modal').remove(); } );
}

var resizeGalleryImage = function() {
	var containerWidth=jQuery('.modal_window').width();
	var containerHeight=jQuery('.modal_window').height();
	jQuery('.modal_window img').css("width","auto");
	jQuery('.modal_window img').css("max-width","100%");
	jQuery('.modal_window img').css("height","auto");
	jQuery('.modal_window img').css("max-height","100%");
	jQuery('.modal_window img').css("margin-top",(containerHeight - jQuery('.modal_window img').height())/2);
	jQuery('.modal_window img').css("margin-left",(containerWidth - jQuery('.modal_window img').width())/2);
};

var positionControls = function() {
	var containerWidth=jQuery('.modal_window').width();
	var containerHeight=jQuery('.modal_window').height();
	var imageWidth=jQuery('.modal_window img').width();
	var imageHeight=jQuery('.modal_window img').height();
	jQuery('.controls').css("width",imageWidth);
	jQuery('.controls').css("height",imageHeight);
	jQuery('.controls').css("margin-top",(containerHeight - imageHeight)/2);
	jQuery('.controls').css("margin-left",(containerWidth - imageWidth)/2);
};

jQuery(document).ready(function(){
	jQuery('a.gallery_item').on('click', function(e){
		open_modal();
		
		jQuery('.controls').remove();
		jQuery('.modal_window').html('<div class="loader close_modal">Loading...</div>');
		
		var img_url = jQuery(this).attr('href');
		var img = new Image();
		jQuery(img).load(function(){
			jQuery('.modal_window').append(img);
			resizeGalleryImage();
			jQuery('.modal_window img').css("display","none");
			jQuery('.modal_window .loader').fadeOut(500, function(){ jQuery('.modal_window .loader').remove(); } );
			jQuery('.modal_window img').delay(500).fadeIn(500);
			
			jQuery('#modal').append('<div class="controls" style="display: none;"><div class="wrap"><nav class="btns"><span class="close_modal"><a href="#">&#10006;</a></span></nav></div></div>');
			positionControls();
			
			jQuery('.controls').delay(500).fadeIn(500);
			
		}).attr('src',img_url).attr('class', 'gallery_img').attr('alt','');
		e.preventDefault();
	});
	
	jQuery('.gallery_item a').on('click', function(e){
		open_modal();
		
		jQuery('.controls').remove();
		jQuery('.modal_window').html('<div class="loader close_modal">Loading...</div>');
		jQuery(this).parent().prev().addClass('prev_gallery_item');
		jQuery(this).parent().next().addClass('next_gallery_item');
		
		var img_url = jQuery(this).attr('href');
		var img = new Image();
		jQuery(img).load(function(){
			jQuery('.modal_window').append(img);
			resizeGalleryImage();
			jQuery('.modal_window img').css("display","none");
			jQuery('.modal_window .loader').fadeOut(500, function(){ jQuery('.modal_window .loader').remove(); } );
			jQuery('.modal_window img').delay(500).fadeIn(500);
			
			jQuery('#modal').append('<div class="controls" style="display: none;"><div class="wrap"><nav class="btns"><span class="close_modal"><a href="#">&#10006;</a></span></nav></div></div>');
			jQuery('.controls .btns').prepend('<span class="prev_btn disabled">&larr;</span>');
		    jQuery('.controls .btns').append('<span class="next_btn disabled">&rarr;</span>');
			positionControls();
				
			var prev = jQuery('.prev_gallery_item a').clone();
			jQuery(prev).html(function(index) { return '&larr;'; });
			if (jQuery(prev).length ) {
				jQuery(prev).removeAttr( 'style' );
				jQuery('.controls .btns .prev_btn').html('');
				jQuery('.controls .btns .prev_btn').removeClass('disabled');
				jQuery('.prev_btn').delay(500).append(prev);
			};
				
			var next = jQuery('.next_gallery_item a').clone();
			jQuery(next).html(function(index) { return "&rarr;"; });
			if (jQuery(next).length ) {
				jQuery(next).removeAttr( 'style' );
				jQuery('.controls .btns .next_btn').html('');
				jQuery('.controls .btns .next_btn').removeClass('disabled');
				jQuery('.next_btn').delay(500).append(next);
			};
			
			jQuery('.controls').delay(500).fadeIn(500);
			
		}).attr('src',img_url).attr('class', 'gallery_img').attr('alt','');
		e.preventDefault();
	});
	
	jQuery('.next_btn a').on('click', function(e){
		jQuery('.modal_window').empty();
		jQuery('.controls').remove();
		jQuery('.modal_window').html('<div class="loader close_modal">Loading...</div>');
		
		jQuery('.gallery_item').removeClass('current_gallery_item');
		jQuery('.next_gallery_item').addClass('current_gallery_item');
		jQuery('.gallery_item').removeClass('next_gallery_item');
		jQuery('.gallery_item').removeClass('prev_gallery_item');
		
		jQuery('.current_gallery_item').prev().addClass('prev_gallery_item');
		jQuery('.current_gallery_item').next().addClass('next_gallery_item');
		
		var img_url = jQuery(this).attr('href');
		var img = new Image();
		jQuery(img).load(function(){
			jQuery('.modal_window').append(img);
			resizeGalleryImage();
			jQuery('.modal_window img').css("display","none");
			jQuery('.modal_window .loader').fadeOut(500, function(){ jQuery('.modal_window .loader').remove(); } );
			jQuery('.modal_window img').delay(500).fadeIn(500);
			
			jQuery('#modal').append('<div class="controls" style="display: none;"><div class="wrap"><nav class="btns"><span class="close_modal"><a href="#">&#10006;</a></span></nav></div></div>');
			jQuery('.controls .btns').prepend('<span class="prev_btn disabled">&larr;</span>');
		    jQuery('.controls .btns').append('<span class="next_btn disabled">&rarr;</span>');
			positionControls();
				
			var prev = jQuery('.prev_gallery_item a').clone();
			jQuery(prev).html(function(index) { return '&larr;'; });
			if (jQuery(prev).length ) {
				jQuery(prev).removeAttr( 'style' );
				jQuery('.controls .btns .prev_btn').html('');
				jQuery('.controls .btns .prev_btn').removeClass('disabled');
				jQuery('.prev_btn').delay(500).append(prev);
			};
				
			var next = jQuery('.next_gallery_item a').clone();
			jQuery(next).html(function(index) { return "&rarr;"; });
			if (jQuery(next).length ) {
				jQuery(next).removeAttr( 'style' );
				jQuery('.controls .btns .next_btn').html('');
				jQuery('.controls .btns .next_btn').removeClass('disabled');
				jQuery('.next_btn').delay(500).append(next);
			};
			
			jQuery('.controls').delay(500).fadeIn(500);
			
		}).attr('src',img_url).attr('class', 'gallery_img').attr('alt','');
		e.preventDefault();
	});
	
	jQuery('.prev_btn a').on('click', function(e){
		jQuery('.modal_window').empty();
		jQuery('.controls').remove();
		jQuery('.modal_window').html('<div class="loader close_modal">Loading...</div>');
		
		jQuery('.gallery_item').removeClass('current_gallery_item');
		jQuery('.prev_gallery_item').addClass('current_gallery_item');
		jQuery('.gallery_item').removeClass('next_gallery_item');
		jQuery('.gallery_item').removeClass('prev_gallery_item');
		
		jQuery('.current_gallery_item').prev().addClass('prev_gallery_item');
		jQuery('.current_gallery_item').next().addClass('next_gallery_item');
		
		var img_url = jQuery(this).attr('href');
		var img = new Image();
		jQuery(img).load(function(){
			jQuery('.modal_window').append(img);
			resizeGalleryImage();
			jQuery('.modal_window img').css("display","none");
			jQuery('.modal_window .loader').fadeOut(500, function(){ jQuery('.modal_window .loader').remove(); } );
			jQuery('.modal_window img').delay(500).fadeIn(500);
			
			jQuery('#modal').append('<div class="controls" style="display: none;"><div class="wrap"><nav class="btns"><span class="close_modal"><a href="#">&#10006;</a></span></nav></div></div>');
			jQuery('.controls .btns').prepend('<span class="prev_btn disabled">&larr;</span>');
		    jQuery('.controls .btns').append('<span class="next_btn disabled">&rarr;</span>');
			positionControls();
				
			var prev = jQuery('.prev_gallery_item a').clone();
			jQuery(prev).html(function(index) { return '&larr;'; });
			if (jQuery(prev).length ) {
				jQuery(prev).removeAttr( 'style' );
				jQuery('.controls .btns .prev_btn').html('');
				jQuery('.controls .btns .prev_btn').removeClass('disabled');
				jQuery('.prev_btn').delay(500).append(prev);
			};
				
			var next = jQuery('.next_gallery_item a').clone();
			jQuery(next).html(function(index) { return "&rarr;"; });
			if (jQuery(next).length ) {
				jQuery(next).removeAttr( 'style' );
				jQuery('.controls .btns .next_btn').html('');
				jQuery('.controls .btns .next_btn').removeClass('disabled');
				jQuery('.next_btn').delay(500).append(next);
			};
			
			jQuery('.controls').delay(500).fadeIn(500);
			
		}).attr('src',img_url).attr('class', 'gallery_img').attr('alt','');
		e.preventDefault();
	});
	
	jQuery('.close_modal').on('click', function(e){ 
		jQuery('.controls').remove();
		jQuery('.modal_window').empty();
		close_modal();
		e.preventDefault();
    });
});

jQuery(window).resize(function() {
	resizeGalleryImage();
	positionControls();
});