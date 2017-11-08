//jQuery to collapse the navbar on scroll
/*
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
*/
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
	var footer = $('.footer');
	var docHeight = $(document).height();
	
	$(window).on('scroll', function(){
		var self = $(this),
		height = self.height(),
		top = self.scrollTop();
		
            /* footer fixed psn*/
			if((top+height+70)>docHeight){
				footer.delay(1).slideDown();
			}
			else{
				footer.slideUp(200);
				/*footer.hide();*/
			}
	});
});