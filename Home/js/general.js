$(document).ready(function() {
	$('#sos-med-insta').on("click", function() {
		alert('Membuka Sosial Media Instagram..');
	});

	$('#sos-med-meta').on("click", function() {
		alert('Membuka Sosial Media Meta/Facebook..');
	});

	$('#sos-med-wa').on("click", function() {
		alert('Membuka Sosial Media Whatsapp..');
	});

	$('#sos-med-amaz').on("click", function() {
		alert('Membuka Sosial Media Amazon..');
	});

	$('.footer-LRC').on("click", function() {
		window.location.href = "about_us.html";
	});

	$('.footer-service').on("click", function() {
		window.location.href = "jasa.html";
	});

	$('.footer-links').on("click", function() {
		window.location.href = "lokasi_pembelian.html";
	});
});