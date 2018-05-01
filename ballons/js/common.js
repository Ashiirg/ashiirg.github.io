$(document).ready(function() {

	$('.head-carousel').bxSlider({
		useCSS: false,
		nextText: '<i class="fa fa-caret-right"></i>',
		prevText: '<i class="fa fa-caret-left"></i>'
	});
	
	$(".search").focus(function(){
	    $(".head-search").addClass('search-focus');
		$(".head-search").removeClass('search-unfocus');
        $(".overlay").addClass("overlay-visible");
	});
	$(".search").focusout(function(){
	    $(".head-search").removeClass('search-focus');
		$(".head-search").addClass('search-unfocus');
        $(".overlay").removeClass("overlay-visible");
	});
	
    $("#view-cart").on("click", function(){
         $(".cart-content").addClass("cart-visible");
         $(".overlay").addClass("overlay-visible");
    });
    
    window.onclick = function(event) {
        if (!event.target.matches('#view-cart')) {

            var dropdowns = document.getElementsByClassName("cart-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('cart-visible')) {
                openDropdown.classList.remove('cart-visible');
                $(".overlay").removeClass("overlay-visible");
                }
            }
        }
    }
    
    $(".ocassions__bottom").on("click", function(e) {
        e.preventDefault(), $(".ocassions__content > div:nth-child(n+9)").slideToggle();
        var text = $(this).children(".ocassions__bottom-content").children(".ocassions__bottom-all").html();
        if($(this).hasClass('opened')){
            var id  = ".ocassions",
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 700);
        }
        $(this).toggleClass('opened');
        $(this).children('.ocassions__bottom-content').children(".ocassions__bottom-all").html(
        text == "See all ocassions <span>7 more</span>" ? "Hide ocassions <span class='return'></span>" : "See all ocassions <span>7 more</span>");
    });
    

});