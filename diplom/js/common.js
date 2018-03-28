$(document).ready(function() {
	$("#part-1").on("click", createP1);
	
	$("#part-1").click(function(event){
        $('html, body').animate({scrollTop: '+=550px'}, 800);
    });

});


var P1 = [];
var CounterP1 = 0;
var resultP1 = [];

P1[0] = "Наявність ліцензії на підготовку фахівців за заочною формою навчання з тих напрямів підготовки (спеціальностей), за якими впроваджується (здійснюється) дистанційна форма навчання";
P1[1] = "Наявність рішення Вченої (педагогічної) ради закладу освіти щодо впровадження дистанційної форми навчання за певними напрямами підготовки (спеціальностями) у межах ліцензованого обсягу заочної форми навчання або за програмами підвищення кваліфікації";
P1[2] = "Наявність Положення про дистанційне навчання у закладі освіти, затвердженого Вченою (педагогічною) радою";
P1[3] = "Наявність підрозділу закладу освіти з відповідним кадровим, матеріально-технічним та фінансовим забезпеченням (далі - підрозділ ДН), який організаційно і технологічно підтримує навчання за дистанційною формою";


function createP1() {
	$(".content").empty();
	
	if(CounterP1 > 3) {
		showResultP1();
		CounterP1 = 0;
		return;
	}
	
	$(".content").append("<p class='question'>" + P1[CounterP1] + "</p><div class='buttoms'>" + "<input type='button' value='Так' class='main-button' onClick='yesP1()'><input type='button' value='Ні' class='main-button' onClick='noP1()'>" + "</div>");
}

function yesP1() {
	resultP1[CounterP1] = 0;
	CounterP1++;
	createP1();
}
function noP1() {
	resultP1[CounterP1] = 1;
	CounterP1++;
	createP1();
}

function showResultP1() {
	if(resultP1[0] == 1) {
		$(".content").append("<p class='red'>" + P1[0] + "</p>" + "<p class='green'>Ви повинні отримати ліцензію, ознайомтесь з інформацією на сайті <a href='http://zib.com.ua/ru/print/121195-obnovleni_licenzionnie_usloviya_osuschestvleniya_obrazovatel.html'>http://zib.com.ua/ru/print/121195-obnovleni_licenzionnie_usloviya_osuschestvleniya_obrazovatel.html</a></p><br>");
	}
	if(resultP1[1] == 1) {
		$(".content").append("<p class='red'>" + P1[1] + "</p>" + "<p class='green'>Необхідна наявність рішення Вченої (педагогічної) ради закладу освіти щодо впровадження дистанційної форми навчання</p><br>");
	}
	if(resultP1[2] == 1) {
		$(".content").append("<p class='red'>" + P1[2] + "</p>" + "<p class='green'>Необхідне положення про дистанційне навчання у закладі освіти, затвердженого Вченою (педагогічною) радою</p><br>");
	}
	if(resultP1[3] == 1) {
		$(".content").append("<p class='red'>" + P1[3] + "</p>" + "<p class='green'>Необхідна наявність підрозділу закладу освіти з відповідним кадровим, матеріально-технічним та фінансовим забезпеченням</p><br>");
	}
}


















