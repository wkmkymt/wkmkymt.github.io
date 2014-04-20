$(document).ready(function() {
	$("nav ul li a img").on("mouseover touchstart", function() {
		$(this).attr("src", $(this).attr("src").replace("of", "on"));
	});
	$("nav ul li a img").on("mouseout touchend", function() {
		$(this).attr("src", $(this).attr("src").replace("on", "of"));
	});
});
