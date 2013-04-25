$(document).ready(function() {
	$('.movie__pic').each(function () {
		$(this).click(function (e) {
			$('.flipped').removeClass('flipped');
			$(this).toggleClass('flipped');
			return fault;
		});
	});
	$('#popup').click(function(){
		$('.overlay,.popup1').toggleClass('is-shown');
	});
	$('#popup1').click(function(){
		$('.overlay,.popup2').toggleClass('is-shown');
	});


	$('#te').click(function () {
	    $('#te .block').addClass('is-wide').afterTransition(function () {
	        alert('do whatever u want, animation is finished');
	    });
	});
});
