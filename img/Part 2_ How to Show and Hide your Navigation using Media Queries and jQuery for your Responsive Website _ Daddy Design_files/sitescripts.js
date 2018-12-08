
jQuery(document).ready(function($) {
  $('.infinte').infinitescroll({
    loading: {
        finished: undefined,
        finishedMsg: null,
        img: "",
        msg: null,
        msgText: "<span>Loading...</span>",
        selector: null,
        speed: 'fast',
        start: undefined
    },
	navSelector  : ".load_more",
    nextSelector : ".load_more a:first",
    itemSelector : ".infinte .item"
  },function(arrayOfNewElems){ 
		$(arrayOfNewElems).css("display","none");
		$(arrayOfNewElems).imagesLoaded(function(){
			$(arrayOfNewElems).fadeIn(500, function(){ equalheight('.equal')});
		});
	});
	
	if ("ontouchstart" in window || "ontouch" in window) { $('body').addClass('touch'); }
	window.onload = function () {
	  $('#loader').fadeOut(500, function(){ $('#loader').remove(); } );
    }
	$('.content-block').fitVids();
	
	  if ("ontouchstart" in window && $(window).width() <= 680 || "ontouch" in window && $(window).width() <= 680) {
		  $('#footer .nav ul').hide();
		  $('#footer .nav h4').bind('click', function(e) {
			  var clickedbtn = $(this);
			  if( $(this).next().is(':visible') ) {
				  $(this).removeClass('active').next().slideUp('fast', 'swing');
			  }
			  if( $(this).next().is(':hidden') ) {
				  if( $('.active').next().is(':visible') ) {
					  $('.active').next().slideUp('fast', 'swing', function(){
						  $('.active').removeClass('active');
						  $(clickedbtn).toggleClass('active').next().slideDown('fast', 'swing');
					  });
				  } else {
					  $(this).toggleClass('active').next().slideDown('fast', 'swing');
				  }
			  }
		  });
	  }

	  $('#sort_btn').on('click', function(e){
		  if( $('ul.sort').is(':visible') ) {
			  $(this).removeClass('active');
			  $('ul.sort').slideUp('fast', 'swing');
		  }
		  if( $('ul.sort').is(':hidden') ) {
			  $(this).toggleClass('active');
			  $('ul.sort').slideDown('fast', 'swing');
		  }
		  e.preventDefault();
	  });

	  $(window).resize(function() {
		if( $('#sort_btn').is(':hidden') ) { 
		  $('ul.sort').removeAttr("style");
		}
		if( $('#sort_btn.active').is(':visible') ) { 
		  $('ul.sort').show();
		}
	  });
	  
	  $('.acc.btn').on('click', function(e){
		  var clickedbtn = $(this);
		  if( $(this).next().is(':visible') ) { 
			  $(this).removeClass('active').next().slideUp('fast', 'swing');
		  }
		  if( $(this).next().is(':hidden') ) {
			  if( $('.active').next().is(':visible') ) {
				  $('.active').next().slideUp('fast', 'swing', function(){ 
					  $('.active').removeClass('active'); 
					  $(clickedbtn).toggleClass('active').next().slideDown('fast', 'swing'); 
				  });
			  } else {
				  $(this).toggleClass('active').next().slideDown('fast', 'swing');
			  }
		  }
		  e.preventDefault();
	  });
});