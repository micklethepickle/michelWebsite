

$(function(){
	//grow and shrink about section
	$('#aboutSec').on('click', function(){
		if($(this).css("height") == '150px'){
			$(this).animate({zIndex: '100', borderWidth: '0'}, 1);
			$(this).animate({width: '700px', height: '400px', top: '0', borderWidth: '0'}, 300);
			$('#backgroundBox').animate({opacity: '0.5'}, 300);
			$('.abtSec').delay(300).animate({opacity: '1'}, 200);
			$('ul.abtList > li').delay(300).animate({opacity: '1'}, 200);
			$('#rightBackButtonBox').fadeIn(300);
			$('#leftBackButtonBox').fadeIn(300);
		};
	})
	$('#backgroundBox').on('click', function(){
		if(!($('#backgroundBox').hasClass('leftSlided') || $('#backgroundBox').hasClass('rightSlided'))){
			$('#aboutSec').delay(200).animate({width: '349px', height: '150px', top: '250px', borderWidth: '2', zIndex: '0'}, 300);
			$('#backgroundBox').delay(200).animate({opacity: '1'}, 300);
			$('.abtSec').animate({opacity: '0'}, 200);
			$('ul.abtList > li').animate({opacity: '0'}, 200);
			$('#rightBackButtonBox').fadeOut(300);
			$('#leftBackButtonBox').fadeOut(300);
		}
	})

	//grow and shrink project section
	$('#projectsSec').on('click', function(){
		if($(this).css("height") == '150px'){
			$(this).animate({zIndex: '100'}, 1);
			$(this).animate({width: '700px', height: '400px', top: '0', left: '0'}, 300);
			$('#backgroundBox').animate({opacity: '0.5'}, 300);
			$('.projSec').delay(300).animate({opacity: '1'}, 200);
			$('ul.projList > li').delay(300).animate({opacity: '1'}, 200);
			$('#rightBackButtonBox').fadeIn(300);
			$('#leftBackButtonBox').fadeIn(300);

		};
	})
	$('#backgroundBox').on('click', function(){
		if(!($('#backgroundBox').hasClass('leftSlided') || $('#backgroundBox').hasClass('rightSlided'))){
			$('#projectsSec').delay(200).animate({width: '349px', height: '150px', top: '250px', left: '351px', zIndex: '0'}, 300);
			$('#backgroundBox').delay(200).animate({opacity: '1'}, 300);
			$('.projSec').animate({opacity: '0'}, 200);
			$('ul.projList > li').animate({opacity: '0'}, 200);
			$('#rightBackButtonBox').fadeOut(300);
			$('#leftBackButtonBox').fadeOut(300);
		}
	})
})