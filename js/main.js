(function ($) {
	"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});


// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
		responsive: [
		{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});


	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// owlCarousel
$('.brand-slider').owlCarousel({
	loop:true,
	margin:0,
	items:1,
	nav:false,
	dots:false,
	responsive:{
		0:{
			items:2
		},
		767:{
			items:4
		},
		992:{
			items:5
		}
	}
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	}
});
});

// instagram grid
$('.i-grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.i-grid').isotope({
		itemSelector: '.i-grid-item',
		percentPosition: true,
		masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.i-grid-item',
	}
});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();



// counter
$('.counter').each(function() {
	var $this = $(this),
	countTo = $this.attr('data-count');

	$({ countNum: $this.text()}).animate({
		countNum: countTo
	},

	{

		duration: 8000,
		easing:'linear',
		step: function() {
			$this.text(Math.floor(this.countNum));
		},
		complete: function() {
			$this.text(this.countNum);
      //alert('finished');
  }

});  



});


// sticky header
$(document).ready(function() {
			// grab the initial top offset of the navigation 
			var stickyNavTop = $('.navber').offset().top;

		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > 300) { 
			    	$('.navber').addClass('sticky');
			    } else {
			    	$('.navber').removeClass('sticky'); 
			    }
			};

			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});
		});

})(jQuery);