$(document).ready(function() {
	$('.back-btn').on('click', function() {
		window.location.href = "index.html";
	});

	$('.map-content img').on('click', function() {
		$('.map-content img').animate({width: cur}, 500);
	});
});