

$(function(){
	$('.abtSec').on('click', function(){
		var boxId = $(this).attr('data-box');
		if(!$('#backgroundBox').hasClass('leftSlided')){
			$('#aboutBox').animate({left: '+=75vw'}, 400);
			$('#mainBox').animate({ left: '+=250px', opacity: '0'}, 400).fadeOut(400);
			$('#' + boxId).animate({zIndex: '1001'});
			$('#' + boxId).delay(200).animate({opacity: '1'}, 200);
			$('#backgroundBox').addClass('leftSlided');
		}
	});
	$('#backgroundBox').on('click', function(){
		if($('#backgroundBox').hasClass('leftSlided')){
			$('.abtBoxes').animate({opacity: '0'}, 200);
			$('#aboutBox').delay(200).animate({left: '-=75vw'}, 400);
			$('#mainBox').delay(200).animate({ left: '-=250px', opacity: '1'}, 400).fadeIn();
			$('#backgroundBox').delay(400).removeClass('leftSlided');
			$('.abtBoxes').delay(200).animate({zIndex: '-1001'})
		}
	})
});