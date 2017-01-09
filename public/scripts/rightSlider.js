

$(function(){
	$('.projSec').on('click', function(){
		var boxId = $(this).attr('data-box');
		if(!$('#backgroundBox').hasClass('rightSlided')){
			$('#projectBox').animate({right: '+=75vw'}, 400);
			$('#mainBox').animate({ right: '+=250px', opacity: '0'}, 400).fadeOut(400);
			$('#' + boxId).animate({zIndex: '1001'});
			$('#' + boxId).delay(200).animate({opacity: '1'}, 200);
			$('#backgroundBox').addClass('rightSlided')
		}
	});

	$('#backgroundBox').on('click', function(){
		if($('#backgroundBox').hasClass('rightSlided')){
			$('.projBoxes').animate({opacity: '0'}, 200);
			$('#projectBox').delay(200).animate({right: '-=75vw'}, 400);
			$('#mainBox').delay(200).animate({ right: '-=250px', opacity: '1'}, 400).fadeIn();
			$('.projBoxes').delay(200).animate({zIndex: '-1001'});
			$('#backgroundBox').delay(400).removeClass('rightSlided');
		}
	})

});