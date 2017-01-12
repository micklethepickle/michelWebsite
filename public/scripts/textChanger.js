

$(function(){
	changeTxt();
})

function changeTxt(){
	$.each(['physicist', 'redditor', 'programmer'], function(index, value){
		setTimeout(function(){
			$('.secondPart').fadeOut(500, function(){
				$('.secondPart').text(value).removeClass('redditor').removeClass('programmer').removeClass('physicist').addClass(value);
			}).delay(200).fadeIn(500);
		}, index * 2000);
	});

	window.setTimeout(function() { changeTxt() }, 6000);
}