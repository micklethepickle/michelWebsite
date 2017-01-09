

$(function(){
	changeTxt();
})

function changeTxt(){
	$.each(['programmer', 'physicist', 'student', 'meme-economist'], function(index, value){
		setTimeout(function(){
			$('.secondPart').fadeOut(500, function(){
				$('.secondPart').text(value).removeClass('meme-economist').removeClass('programmer').removeClass('physicist').removeClass('student').addClass(value);
			}).delay(200).fadeIn(500);
		}, index * 2000);
	});

	window.setTimeout(function() { changeTxt() }, 8000);
}