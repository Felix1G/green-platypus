class ProdukPilihanData {
	constructor(image, title, desc) {
		this.image = image;
		this.title = title;
		this.desc = desc;
	}
}

function topY(elem) {
	return elem.position().top -
	parseInt(elem.css("margin-top").replace('px', '')) -
	parseInt(elem.css("padding-top").replace('px', ''));
}

$(document).ready(function() {
	$(window).on("scroll", function() {
		let scroll = $(window).scrollTop();
		const elem = $("#nav-bar");
		
		if (scroll > elem.height()) {
			elem.css("position", "fixed");
		} else {
			elem.css("position", "relative");
		}

		//header
		if (scroll < topY($(".body"))) {
			$("#home-btn").addClass("location");
			$("#koleksi-btn").removeClass("location");
			$("#spesialitas-btn").removeClass("location");
			$("#kontak-btn").removeClass("location");
		} else if (scroll < topY($(".specialty"))) {
			$("#home-btn").removeClass("location");
			$("#koleksi-btn").addClass("location");
			$("#spesialitas-btn").removeClass("location");
			$("#kontak-btn").removeClass("location");
		} else if (scroll < $(document).height() - $(window).height()) {
			$("#home-btn").removeClass("location");
			$("#koleksi-btn").removeClass("location");
			$("#spesialitas-btn").addClass("location");
			$("#kontak-btn").removeClass("location");
		} else {
			$("#home-btn").removeClass("location");
			$("#koleksi-btn").removeClass("location");
			$("#spesialitas-btn").removeClass("location");
			$("#kontak-btn").addClass("location");
		}
	});

	$("#home-btn").on("click", function() {
		$("html, body").animate({ scrollTop: 0 });
	});

	$("#koleksi-btn").on("click", function() {
		$("html, body").animate({ scrollTop: topY($(".body")) });
	});

	$("#spesialitas-btn").on("click", function() {
		$("html, body").animate({ scrollTop: topY($(".specialty")) });
	});

	$("#kontak-btn").on("click", function() {
		$("html, body").animate({ scrollTop: $(document).height() - $(window).height() });
	});

	//UI produk pilihan
	var uiIndex = 0
	var uiArr = []
	jQuery.getJSON("products.json", function(data) {
		$.each(data, function(key) {
			alert(key['image']);
			alert(key[title]);
			alert(key[desc]);
		})
	});
});