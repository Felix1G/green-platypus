
function title(index) {
	switch (index) {
		case -1: return "LRC SR Series";
		case 0: return "LRC X Series";
		case 1: return "LRC Dominion";
		case 2: return "LRC Undertaker";
		case 3: return "LRC Undertaker Pro";
	}
}

function description(index) {
	switch (index) {
		case -1:return "Jam tangan PERTAMA yang dilengkapi dengan teknologi ramah lingkungan pengisian tenaga surya, memastikan Anda tidak perlu khawatir dengan baterainya di luar.";
		case 0: return "Memperkenalkan perangkat penunjuk waktu mutakhir dan futuristik yang memadukan gaya, fungsionalitas, dan teknologi dengan mulus.";
		case 1: return "Smartwatch canggih ini menawarkan desain elegan, layar sentuh responsif, dan fitur pintar yang beragam. Koneksi nirkabel canggih memungkinkan Anda terhubung dengan perangkat pintar lainnya, sementara fitur pelacakan kesehatan yang canggih membantu Anda menjaga kesehatan dan kebugaran.";
		case 2: return "Memperkenalkan perangkat penunjuk waktu mutakhir dan futuristik yang memadukan gaya, fungsionalitas, dan teknologi dengan mulus. Jam tangan ramping dan minimalis ini mewakili puncak inovasi jam tangan digital, menawarkan sejumlah fitur yang diperuntukkan bagi individu yang sadar mode dan penggemar teknologi.";
		case 3: return "Memperkenalkan perangkat penunjuk waktu mutakhir dan futuristik yang memadukan gaya, fungsionalitas, dan teknologi dengan mulus. Jam tangan ramping dan minimalis ini mewakili puncak inovasi jam tangan digital, menawarkan sejumlah fitur yang diperuntukkan bagi individu yang sadar mode dan penggemar teknologi.";
	}
}


function price(index) {
	switch (index) {
		case -1:return "Rp 1.499.999";
		case 0: return "Rp 1.599.999";
		case 1: return "Rp 1.799.999";
		case 2: return "Rp 3.599.999";
		case 3: return "Rp 3.999.999";
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
	$('#price').html(price(index))
		.animate({'margin-left': '+=100', 'opacity': 0}, 0)
		.animate({'margin-left': '-=100', 'opacity': 1}, 1500);
	$('#description').html(description(index))
	.animate({'margin-left': '+=100', 'opacity': 0}, 0)
	.animate({'margin-left': '-=100', 'opacity': 1}, 1500);
	$('#back-btn').on("click", function() {
		window.location.href = "index.html";
	})
	$('#buy-btn').on("click", function() {
		alert("Membeli Smartwatch..");
	})
})