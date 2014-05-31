

$(document).ready(function(){
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
		$('#layer2').stop().animate({
			'left': i * winWidth * -1
		}, speed, "easeOutSine");
		$('#layer3').stop().animate({
			'left': i * winWidth * -1
		}, speed, "easeOutSine");
		$('#hero .desc:visible').fadeOut(speed/2, function(){
			$('#hero .desc:eq('+i+')').fadeIn(speed/2);
		});
		$('#hero .nav li:eq('+i+')').addClass('active')
			.siblings().removeClass('active');
	}
	
	//set hero position on window resize
	$(window).resize(function(){
		winWidth = $('body').width();
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

	//workFull toggle

		$('#linkVintage').click(function() {
			$('#vintageFull').fadeIn("slow");
			$('html').css('overflow', 'hidden');
	
		});

		$('#vintageClose').click(function() {
			$('#vintageFull').fadeOut("slow");
			$('html').css('overflow', 'visible');
		});

		$('#linkJeremy').click(function() {
			$('#jeremyFull').fadeIn("slow");
			$('html').css('overflow', 'hidden');
		});

		$('#jeremyClose').click(function() {
			$('#jeremyFull').fadeOut("slow");
			$('html').css('overflow', 'visible');
		});

		$('#linkConverge').click(function() {
			$('#convergeFull').fadeIn("slow");
			$('html').css('overflow', 'hidden');
		});

		$('#convergeClose').click(function() {
			$('#convergeFull').fadeOut("slow");
			$('html').css('overflow', 'visible');
		});
		
    //work full height//

	$(function(){
        var windowH = $(window).height();
        var vintageH = $('#vintageFull, #jeremyFull, #convergeFull').height();
        if(windowH > vintageH) {                            
            $('#vintageFull, #jeremyFull, #convergeFull').css({'height':($(window).height())+'px'});
    }   

	});   


//Section heights//

	$(function(){
        var heightwindow = $(window).height();
        $('#landing, #hero, #layer1, #aboutSection, #contactSection').css('height', heightwindow+'px');
    });

    $(window).resize(function() {
    	var heightwindow = $(window).height();
        $('#landing, #hero, #layer1, #aboutSection, #contactSection').css('height', heightwindow+'px');
    });

	//nav vertical scroll//

	$("#header-logo, #upwork").click(function() {
        $('html, body').animate({
            scrollTop: $("#landing").offset().top});
       }); 

	$("#work, #downlanding").click(function() {
        $('html, body').animate({
            scrollTop: $("#hero").offset().top});
        }); 

	$("#about, #downwork").click(function() {
        $('html, body').animate({
            scrollTop: $("#aboutSection").offset().top});
        }); 

	$("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contactSection").offset().top});

		}); 

//window resize snap - not working//

// var STELLARJS = {
// init: function() {
//     var self = this;
//     $(function(){
//         self.$sections = $('#landing, #hero, #aboutSection, #contactSection').each(function(index){
//             $(this).data('sectionIndex', index);
//         });

//         self.handleEvents();

//     });
// },
// handleEvents: function() {
//     var self = this,
//         //Debounce function from Underscore.js
//         debounce = function(func, wait) {
//             var timeout;
//             return function() {
//                 var context = this, args = arguments;
//                 var later = function() {
//                     timeout = null;
//                     func.apply(context, args);
//                 };
//                 clearTimeout(timeout);
//                 timeout = setTimeout(later, wait);
//             }
//         },
//         handleScroll = function() {
//             var scrollTop = $(window).scrollTop(),
//                 sectionIndex = Math.round((scrollTop) / self.$sections.first().outerHeight()),
//                 $activeSection = self.$sections.eq(sectionIndex);

//             if ($activeSection.length === 0) {
//                 $activeSection = self.$sections.last();
//             }

//             if ($activeSection.length === 0) return;

//             $(window).unbind('scroll.stellarsite');

//             if (scrollTop === 0) {
//                 $(window).unbind('scroll.stellarsite').bind('scroll.stellarsite', debounce(handleScroll, 500));
//             } else {
//                 $('html,body').animate({
//                     scrollTop: $activeSection.offset().top
//                 }, 600, 'easeInOutExpo', function() {
//                     setTimeout(function(){
//                         $(window).unbind('scroll.stellarsite').bind('scroll.stellarsite', debounce(handleScroll, 500));
//                     }, 10);
//                 });
//             }

//             $(window).bind('mousewheel', function(){
//                 $('html,body').stop(true, true);
//             });

//             $(document).bind('keydown', function(e){
//                 var key = e.which;

//                 if (key === 37 || key === 39) {
//                     $('html,body').stop(true, true);
//                 }
//             });
//         };

//     if (window.location.href.indexOf('#show-offset-parents-default') === -1) {
//         $(window).bind('scroll.stellarsite', debounce(handleScroll, 500));
//     }
// } }; 



});

$(window).load(function() {
	 $('#loading').fadeOut(1000);
});


