

$(document).ready(function() {
  //workFull invisible toggle
  toggle('#linkVintage', '#vintageClose', '#vintageFull');
  toggle('#linkJeremy', '#jeremyClose', '#jeremyFull');
  toggle('#linkConverge','#convergeClose','#convergeFull');

 
	function hideGlobalOverflow() {
	  $('html').css('overflow', 'hidden');
	};
 
	function showGlobalOverflow() {
	  $('html').css('overflow', 'visible');
	};
  
	function toggle(openLink, closeLink, container) {
		  $(openLink).click(function() {
		    $(container).fadeIn("medium");
		    hideGlobalOverflow();
		  });
		  $(closeLink).click(function() {
		    $(container).fadeOut("medium");
		    showGlobalOverflow();
		  });
	};

	//current hero
	var i = 0,
		winWidth = $('body').width();
	
	$('nav a, #nav a, .desc .work').click(function(){
		var div = $(this).attr('class').split(" ")[0];
		$('body').scrollTo( $('#'+div), 800 );
	});

	$(window).scroll(function(){
		var top = $(this).scrollTop();
		if (top > 36) {
			$('nav').fadeIn(500);
		} else {
			$('nav').fadeOut(500);
		}
	});
	
	//hero horizontal move function
	function move(speed){
		$('#layer1').stop().animate({
			'left': i * winWidth * -1
		}, speed, "easeOutSine");
		
		$('#hero .desc:visible').fadeOut(speed/2, function(){
			$('#hero .desc:eq('+i+')').fadeIn(speed/2);
		});
	}



	//set hero position on window resize
	$(window).resize(function(){
		winWidth = $('body, html').width();
		move(0);
	});

	//hero horizontal nav
	$('#hero .nav li:not(.active)').live('click', function(){
		i = $(this).index();
		move(2000);
	});

	//hero section prev
	$('#hero #prev').click(function(){
		if (i > 0) {
			i--;
			move(1000);
			$('#hero #next').removeClass('disabled');
		}
		if (i == 0){
			$('#hero #prev').addClass('disabled');
		}
	});

	//hero section next
	$('#hero #next').click(function(){
		if (i < 2) {
			i++;
			move(1000);
			$('#hero #prev').removeClass('disabled');
		}
		if (i == 2){
			$('#hero #next').addClass('disabled');
		}
	});

		




//resize section heights on window resize//

    $(window).resize(function() {
    	var heightwindow = $(window).height();
        $('section, #layer1, .workFull').css('height', heightwindow+'px');
    });


//resize section heights on load//

    $(function(){
        var heightwindow = $(window).height();
        $('section, #layer1, .workFull').css('height', heightwindow+'px');
    });


        //work full height//

    $(function(){
        var windowH = $(window).height();
        var vintageH = $('#vintageFull, #jeremyFull, #convergeFull').height();
        if(windowH > vintageH) {                            
            $('#vintageFull, #jeremyFull, #convergeFull').css({'height':($(window).height())+'px'});
    }   

    });   



	//nav vertical scroll//

	$("#header-logo, #upwork").click(function() {
        $('html, body').animate({
            scrollTop: $("#landing").offset().top});
       }); 


	$("#work, #downlanding, #upabout").click(function() {
        $('html, body').animate({
            scrollTop: $("#hero").offset().top});
        }); 

	$("#about, #downwork, #upcontact").click(function() {
        $('html, body').animate({
            scrollTop: $("#aboutSection").offset().top});
        }); 

	$("#contact, #downabout").click(function() {
        $('html, body').animate({
            scrollTop: $("#contactSection").offset().top});

		}); 



     // jQuery(function($) {
     //    var options = {
     //    directionThreshold: 200,
     //    slideSpeed: 500
     //        };

     //    // Basic demo
     //    $('body,html').panelSnap(options);

     //    });

});

$(window).load(function() {
	 $('#loading').fadeOut(1000);
});


