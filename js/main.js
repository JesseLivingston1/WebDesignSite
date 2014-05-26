

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
	
	//hero move function
	function move(speed){
		$('#layer1').stop().animate({
			'left': i * winWidth * -3
		}, speed, "easeOutSine");
		$('#layer2').stop().animate({
			'left': i * winWidth * -2
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

	//hero nav
	$('#hero .nav li:not(.active)').live('click', function(){
		i = $(this).index();
		move(2000);
	});

	//hero section preview
	$('#hero .prev').click(function(){
		if (i > 0) {
			i--;
			move(2000);
			$('#hero .next').removeClass('disabled');
		}
		if (i == 0){
			$('#hero .prev').addClass('disabled');
		}
	});

	//hero section next
	$('#hero .next').click(function(){
		if (i < 2) {
			i++;
			move(2000);
			$('#hero .prev').removeClass('disabled');
		}
		if (i == 2){
			$('#hero .next').addClass('disabled');
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

//landing height//

	// $(function(){
 //        var windowH = $(window).height();
 //        var landingH = $('#landing').height();
 //        if(windowH > landingH) {                            
 //            $('#landing').css({'height':($(window).height())+'px'});
 //    }   

	// });

	//nav scroll//

	// $("#work").click(function() {
 //        $('body').animate({
 //            scrollTop: $("#work").offset().top});
 //    });

    //work full height//

	$(function(){
        var windowH = $(window).height();
        var vintageH = $('#vintageFull, #jeremyFull, #convergeFull').height();
        if(windowH > vintageH) {                            
            $('#vintageFull, #jeremyFull, #convergeFull').css({'height':($(window).height())+'px'});
    }   

	});   

$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: true,
        resize : true,
        slidesColor : ['#ccc', '#fff'],
        anchors:['firstSlide', 'secondSlide'],
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        menu: false,
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        autoScrolling: true,
        scrollOverflow: false,
        css3: false,
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#element1, .element2',
        normalScrollElements: '#element1, .element2',
        normalScrollElementTouchThreshold: 5,
        keyboardScrolling: true,
        touchSensitivity: 15,
        continuousVertical: false,
        animateAnchor: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
});

});

$(window).load(function() {
	 $('#loading').fadeOut(1000);
});


