

 $(document).ready(function() {
    $('#fullpage').fullpage({
    anchors: ['#landing', '#work', '#about', '#contact', '#vintage-section', '#jeremy', '#converge'],
    navigation: true,
    navigationPosition:'left'
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


