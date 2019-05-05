jQuery(document).ready(function() {
	
	/*
	    Navigation
    */
    /*
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
    });
    /*
    $('.top-content .text').waypoint(function() {
		$('.navbar-brand').toggleClass('navbar-brand2');
    });
    
    
	
    /*
        Background slideshow
   
    $('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    }); */

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 400) {
            $(".navbar").removeClass("navbar-no-bg");
        } else {
            $(".navbar").addClass("navbar-no-bg");
        }
    });

    /* Menu Interno */

    $('#openNav, .closebtn').click(function () {
        $('#sideNav').toggleClass("ancho");
    });

    /* Tooltip*/

    $('#fechaVenc [data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'right',
        html: true
    });
    
    /*
        Wow
    */
    new WOW().init();

    /*function openNav() {
        var element = document.getElementById("sideNav");
        element.classList.toggle("ancho");;
    }
    function closeNav() {
        var element = document.getElementById("sideNav");
        element.classList.toggle("ancho");;
    }*/
    
	
});
