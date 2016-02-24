$(document).ready(function(){
	$("div").fadeOut({queue: false, duration: 0});
	//$("div").transition({queue: false, x: 0, y: -60});

	$("div").fadeIn({queue: false, duration: 'slow'});
	//$("div").transition({queue: false, x: 0, y: 0, duration: 'slow'});
});