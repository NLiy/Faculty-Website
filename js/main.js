'use strict';


(function ($){
	/*toggle nav-switch-header section*/

	$('.nav-switch').on('click', function(event){
		$(this).toggleClass('active');
		$('.nav-wrap').slideToggle(400);
		event.preventDefault();
	});

/*set background image*/

$('.set-bg').each(function(){
	var bg = $(this).data('setbg');
	$(this).css('background-image', 'url('+ bg +')');
});


/*slider*/
$('.testimonial-slider').owlCarousel({
	loop:true,
	nav:false,
	dots:true,
	margin:128,
	center:true,
	items:1,
	mouseDrag:false,
	animateOut: 'fadeOutRight',
	animateIn: 'fadeInLeft',
	autoplay:true
});

}) (jQuery);

