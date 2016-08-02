$(document).ready(function(){
		
 

    $(".search-btn").click(function() {
        $(".search-inpt").toggleClass('showsearch animated');
		$(".search-inpt").focus();
    });
	
	 new WOW().init();   
		

		$('#top-slider').slick({
	arrows: true,
	prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-angle-left"></button>',
	nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-angle-right"></button>'
});
		

		
		
		
		
		
		
	});