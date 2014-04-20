$(document).ready(function() {
	var imgs = $("nav ul li a img");
	imgs.each(function() {
		var key = imgs.index($(this)) + 1;
		$(this).mouseover(function() {
			$(this).attr("src", "/img/onwkm" + key + ".png");
		});
		$(this).mouseout(function() {
			$(this).attr("src", "/img/ofwkm" + key + ".png");
		});
	});
});