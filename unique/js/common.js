$(document).ready(function() {
	
	//bxslider
	$('.header-carousel').bxSlider({
		controls: false,
		maxSlides: 1
	});
	
	//Toggle menu
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu-mob").slideToggle();
        return false;
    });

});