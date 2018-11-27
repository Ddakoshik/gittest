$(document).ready(function() {
	
	
	
	
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 0){
			$('.headerMenuScrol').addClass("fixedmenu");
		} else if($(this).scrollTop() <= 0) {
			$('.headerMenuScrol').removeClass("fixedmenu");
		}
	});
	
	
	
	$(window).scroll(function() {
		if($(this).scrollTop() !== 0) {
			$('.totop').fadeIn();
		} else {
			$('.totop').fadeOut();
		}
	});
	
	

	
	
	$(".navMenu, .totopblock").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-70}, 1500);
    });
	






	$('.owl-carousel.carusel-2').owlCarousel({
		nav:true,
		items:5,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});

	$('.owl-carousel.carusel-3').owlCarousel({
		nav:true,
		items:3,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});


	$(function() {
		var d = new Date()
		var time = d.getHours()
		if (time >= 9 && time < 18){
		$("#alrt_b").css("display", "block");
		} else {
		$("#alrt_b1").css("display", "block");
		}});
	
	
	
	
		
});



