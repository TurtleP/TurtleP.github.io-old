/*
* Page loaded, fade games IN
*/

$(document).ready(function(){
	$(".game").fadeOut({queue: false, duration: 0});
	$(".head").fadeOut({queue: false, duration: 0});

	$(".game").fadeIn({queue: false, duration: 'slow'});
	   
	$(".head").fadeIn('slow');

	/*$(".game").hover(
		function()
		{
			$(this).css("filter", "blur(3px)");
			$(this).css("webkitFilter", "blur(3px)");

			$(this).getElementById("gametext").css("filter", "blur(-3)");
			$(this).getElementById("gametext").css("webkitFilter", "blur(-3)");
		},

		function()
		{
			$(this).css("filter", "blur(0px)");
			$(this).css("webkitFilter", "blur(0px)");
		}
	);*/
});