function title(index) {
	switch (index) {
		case -1: return "LRC SR Series";
		case 0: return "LRC X Series";
		case 1: return "LRC Dominion";
		case 2: return "LRC Undertaker";
		case 3: return "LRC Undertaker Pro";
	}
}

function desc(index) {
	switch (index) {
		case -1: return "Harga: Rp 5 000 000, 00-";
		case 0: return "Harga: Rp 6 000 000, 00-";
		case 1: return "Harga: Rp 7 000 000, 00-";
		case 2: return "Harga: Rp 8 000 000, 00-";
		case 3: return "Harga: Rp 9 000 000, 00-";
	}
}

$(document).ready(function() {
	const urlParam = new URLSearchParams(window.location.search);
	const img = urlParam.get('img');
	const index = parseInt(urlParam.get('index'));

	$('#img-produk').attr('src', img).height(
		$(document).height() - $('#nav-bar').height())
		.fadeOut(0).fadeIn(1000);
	$('#title-produk').html(title(index))
		.animate({'margin-left': '+=100', 'opacity': 0}, 0)
		.animate({'margin-left': '-=100', 'opacity': 1}, 1000, function() {

		});
	$('#desc-produk').html(desc(index))
		.animate({'margin-left': '+=100', 'opacity': 0}, 0)
		.animate({'margin-left': '-=100', 'opacity': 1}, 1500);
	$('#back-btn').on("click", function() {
		window.location.href = "index.html";
	})
	$('#buy-btn').on("click", function() {
		alert("Membeli Smartwatch..");
	})
})