$(document).ready(function() {
    
    $("#salon-adress").selectize();
    
    $("#salon-service").selectize();

	var $select = $("#salon-subservice").selectize({
        allowEmptyOption: true,
        onChange: function(value) {
            if(value == "Окрашивание") {
                subserviceOneVisible();
            }
        }
    });
    var selectize = $select[0].selectize;
    selectize.clear();
    
    $('.selectize-input > input').prop('disabled', 'disabled');
    
    $(".salons-open").on("click", function() {
        if($(".subservice-1").hasClass("subservice-1-visible")) {
            subserviceOneHidden();
            var selectize = $select[0].selectize;
            selectize.clear();
        }
    });
    
});

$(function () { 
    var target_block = $("#number-animate"); // Ищем блок 
    var blockStatus = true;  
    $(window).scroll(function() { 
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height())); 
        if(scrollEvent && blockStatus) {  
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы. 
            $({numberValue: 0}).animate({numberValue: 10}, { 
                duration: 1000, // Скорость анимации
                easing: "linear", 
                step: function(val) {  
                    $("#number-animate").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию 
                } 
            }); 
        } 
    }); 
});

function subserviceOneVisible() {
    $(".salons-content").addClass("salon-content-hide");
    setTimeout(function(){
        $(".subservice-1").addClass("subservice-1-visible");
        $(".salons-form").addClass("subservice-table-margin");
    }
    ,500);
    setTimeout(function(){
        $(".subservice-1").addClass("subservice-1-visible-overflow");
        $(".subservice-1").addClass("sub-1-line");
    }
    ,1000);
}
function subserviceOneHidden() {
    $(".subservice-1").removeClass("sub-1-line");
    
    setTimeout(function(){
        $(".subservice-1").removeClass("subservice-1-visible");
        $(".subservice-1").removeClass("subservice-1-visible-overflow");
    }
    ,250);
    setTimeout(function(){
        $(".salons-form").removeClass("subservice-table-margin");
        $(".salons-content").removeClass("salon-content-hide");
    }
    ,1000);
}

//function makeNewPosition(){
//    
//    // Get viewport dimensions (remove the dimension of the div)
//    var h = $(".salon-slick-wrap").height() - 65;
//    var w = $(".salon-slick-wrap").width() - 65;
//    
//    var nh = Math.floor(Math.random() * h);
//    var nw = Math.floor(Math.random() * w);
//    
//    return [nh,nw];    
//    
//}
//
//function animateSlick(){
//    var newq = makeNewPosition();
//    $('.salons-slick').animate({ top: newq[0], left: newq[1] }, 1000 , "linear",  function(){
//      animateSlick();        
//    });
//    
//};