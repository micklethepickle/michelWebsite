

$(function(){
	$('.projSec').on('click', function(){
		var boxId = $(this).attr('data-box');
		if($('#backgroundBox').css("opacity") == '0.5'){
			$('#projectBox').animate({right: '+=75vw'}, 400);
			$('#mainBox').animate({ right: '+=250px', opacity: '0'}, 400);
			$('#' + boxId).animate({zIndex: '1001'});
			$('#' + boxId).delay(200).animate({opacity: '1'}, 200);
			$('#backgroundBox').animate({opacity: '0.49'}, 400);
		}
	});

	$('#backgroundBox').on('click', function(){
		if($('#backgroundBox').css("opacity") == '0.49'){
			$('.projBoxes').animate({opacity: '0'}, 200);
			$('#projectBox').delay(200).animate({right: '-=75vw'}, 400);
			$('#mainBox').delay(200).animate({ right: '-=250px', opacity: '1'}, 400);
			$('#backgroundBox').delay(200).animate({opacity: '0.5'}, 400);
			$('.projBoxes').delay(200).animate({zIndex: '-1001'});
		}
	})

});