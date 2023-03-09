;(function () {
	
	'use strict';
	const images = new Map([
		[1, 'images/wedding/test-12.jpg'],
		[2, 'images/wedding/test-18.jpg'],
		[3, 'images/wedding/test-4.jpg'],
		[4, 'images/wedding/test-5.jpg'],
		[5, 'images/wedding/test-6.jpg'],
		[6, 'images/wedding/test-15.jpg'],
		[7, 'images/wedding/test-2.jpg'],
		[8, 'images/wedding/test-8.jpg'],
		[9, 'images/wedding/test-14.jpg'],
	  ]);
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle, .fh5co-nav-action");
	    if ($(e.target).hasClass("fh5co-nav-action") || (!container.is(e.target) && container.has(e.target).length === 0)) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#navbar').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		setTimeout( x =>
			$(".fh5co-loader").fadeOut(700) , 2500);
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	//show image in popup
	var setImage = function(imgUrl, ele){
		var bg = "";
		if(imgUrl == undefined){
			$("#myModal").css({ display: "flex", zIndex: 999999, justifyContent: "center", alignItems: "center" });
			bg = $(ele).css("background-image").replace('url(','').replace(')','').replace(/\"/gi, "");
		}else{
			bg = imgUrl;
		}
		$("#image-show").attr('src', bg);
		var imgHeight = $("#image-show").height() +50;
		var imgWidth = $("#image-show").width() +50;
		$(".modal-content").css({ height: imgHeight, width: imgWidth});
	}
	var showImage = function(imgUrl){
		$(".show-popup").on('click', function(event){
			setImage(imgUrl, this);
		});

		$(".close-md").on("click", function(event){
			$("#myModal").css({ display: "none",zIndex:-1 });
		});
	}

	//slide show image.
	function prevSlide() {
		var current = $("#image-show").attr('src');
		var imageUrl = current.replace(window.location.origin +'/', '')
		var currentIndex = getKey(imageUrl);
		if(currentIndex !=1){
			currentIndex--;
		}else{
			currentIndex = 9;
		}
		var i = images.get(currentIndex);
		setImage(i, undefined);
	}

	function getKey(val) {
		return [...images].find(([key, value]) => val === value)[0];
	  }

	function showSlides() {

		var current = $("#image-show").attr('src');
		var imageUrl = current.replace(window.location.origin +'/', '')
		var currentIndex = getKey(imageUrl);
		if(currentIndex !=9){
			currentIndex++;
		}else{
			currentIndex = 1;
		}
		var i = images.get(currentIndex);
		setImage(i, undefined);
	}
	var manualSilde = function() {
		$(".prev").click(()=>{
			prevSlide();
		})
		
		$(".next").click(()=>{

			showSlides();
		})
	}
	
	$(function(){
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
		showImage();
		manualSilde();
	});


}());