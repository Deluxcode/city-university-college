$(function(){
	// Slider init
	$('.slider').owlCarousel({
    	loop: true,
    	dots: false,
		items:	1,
		nav: true,
		smartSpeed: 1000,
		navText: [
			'<p class="slider-nav-btn prew-btn"></p>',
			'<p class="slider-nav-btn next-btn"></p>'
		]
	});

	// Mobile menu
	$('.sandwich').on('click', function(){
		$('.sandwich').toggleClass('active');
		$('.menu_wrap').toggleClass('active');
		// $('body').toggleClass('noscroll');
    });
	$(document).on('click', function(e) {
		if (!$(e.target).closest(".menu").length) {
			$('.sandwich').removeClass('active');
			$('.menu_wrap').removeClass('active');
			// $('body').removeClass('noscroll');
	  	}
	  	e.stopPropagation();
	});

	// Go up button
	$('.go_up').on('click', function(){
	    $('html, body').animate({ scrollTop: 0 }, 1000);
    });

	// Mobile menu accordion
	$('.menu-item-has-children').on('click', function(){
		var viewporwidth = $( window ).width();
		if (viewporwidth < 1260) {
			$(this).closest('li').find('.sub-menu:first').slideToggle(300);
			$(this).toggleClass('opened');
		}
	});

	/*$('.sub_menu_arrow span, .menu-item-has-children span, .menu-item-has-children a').on('click', function(){
		var viewporwidth = $( window ).width();
		if (viewporwidth < 1260) {
			$(this).closest('li').find('.sub-menu:first').slideToggle(300);
			$(this).closest('li').toggleClass('opened');
		}
	});*/

	// Search bar
	$('.search_icon, .close_search_icon').on('click', function(){
		$('.search').toggleClass('active');
		$('.search input').val('');
	});
	$(document).on('click', function(e) {
		if (!$(e.target).closest(".search").length) {
	    	$('.search').removeClass('active');
	  	}
	  	e.stopPropagation();
	});

	// Menu hover
	$('.sub_menu_item_block, .menu-item-has-children').hover(
		function() {
			var viewporwidth = $( window ).width();
			var elem_width = $(this).find('.sub-menu:first').width();
			var elem_position = $(this).find('.sub-menu:first').offset().left;
			if (viewporwidth >= 1260) {
				if(viewporwidth - elem_position - elem_width < elem_width){
					if($(this).closest('ul').hasClass('sub-menu')){
						$(this).addClass('revert');
						$(this).find('.sub-menu:first').addClass('revert');
					}
				}
			}
	  	}, function() {}
	);

	// Custom select
	$('.select_input_wrap').on('click', function(){
		$('.options_list').slideToggle(200);
	});
	$('.options_list li').on('click', function(){
		$('.select_input_wrap span').html($(this).html());
		$('.select_input_wrap .subject').val($(this).html());
		$('.options_list').slideUp(200);
	});
	$(document).on('click', function(e) {
		if (!$(e.target).closest('.select').length) {
	    	$('.options_list').slideUp(200);
	  	}
	  	e.stopPropagation();
	});

	// Programs tabs
	$('.programms_tabs li').on('click', function(){
		var id = $(this).attr('data-id');
		$('.programms_tabs li').removeClass('active');
		$('.tab_content_item').removeClass('active');
		$(this).addClass('active');
		$('#'+ id +'').addClass('active');
	});

	// Lang change imitation
	$('.eng').on('click', function(){
		$('body').removeClass('rtl');
		$('.lang a').removeClass('active');
		$(this).addClass('active');
	});
	$('.rtl').on('click', function(){
		$('body').addClass('rtl');
		$('.lang a').removeClass('active');
		$(this).addClass('active');
	});


});