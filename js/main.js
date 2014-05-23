

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

		});

		$('#vintageClose').click(function() {
			$('#vintageFull').fadeOut("slow");
		});

		$('#linkJeremy').click(function() {
			$('#jeremyFull').fadeIn("slow");
		});

		$('#jeremyClose').click(function() {
			$('#jeremyFull').fadeOut("slow");
		});

		$('#linkConverge').click(function() {
			$('#convergeFull').fadeIn("slow");
		});

		$('#convergeClose').click(function() {
			$('#convergeFull').fadeOut("slow");
		});


});

$(window).load(function() {
	 $('#loading').fadeOut(1000);
});


