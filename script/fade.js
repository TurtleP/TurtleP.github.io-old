/*
* Page loaded, fade games IN
*/

$(document).ready(function(){
	$(".game").fadeOut({queue: false, duration: 0});
	$(".head").fadeOut({queue: false, duration: 0});

	$(".game").fadeIn({queue: false, duration: 'slow'});
	   
	$(".head").fadeIn('slow');
});