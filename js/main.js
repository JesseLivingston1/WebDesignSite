

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

	$(function(){
        var windowH = $(window).height();
        var vintageH = $('#vintageFull, #jeremyFull, #convergeFull').height();
        if(windowH > vintageH) {                            
            $('#vintageFull, #jeremyFull, #convergeFull').css({'height':($(window).height())+'px'});
    }   

	});   


$(window).load(function() {
	 $('#loading').fadeOut(1000);
});


