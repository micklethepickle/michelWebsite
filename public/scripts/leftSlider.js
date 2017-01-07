

$(function(){
	$('.abtSec').on('click', function(){
		var boxId = $(this).attr('data-box');
		if($('#backgroundBox').css("opacity") == '0.5'){
			$('#aboutBox').animate({left: '+=75vw'}, 400);
			$('#mainBox').animate({ left: '+=250px', opacity: '0'}, 400);
			$('#' + boxId).animate({zIndex: '1001'});
			$('#' + boxId).delay(200).animate({opacity: '1'}, 200);
			$('#backgroundBox').animate({opacity: '0.48'}, 400);
		}
	});
	$('#backgroundBox').on('click', function(){
		if($('#backgroundBox').css("opacity") == '0.48'){
			$('.abtBoxes').animate({opacity: '0'}, 200);
			$('#aboutBox').delay(200).animate({left: '-=75vw'}, 400);
			$('#mainBox').delay(200).animate({ left: '-=250px', opacity: '1'}, 400);
			$('#backgroundBox').delay(200).animate({opacity: '0.5'}, 400);
			$('.abtBoxes').delay(200).animate({zIndex: '-1001'})
		}
	})
});