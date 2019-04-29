jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
    });
    /*
    $('.top-content .text').waypoint(function() {
		$('.navbar-brand').toggleClass('navbar-brand2');
	});
	
    /*
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });

   
    
    /*
        Wow
    */
    new WOW().init();
	
});
