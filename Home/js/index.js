const MAX_PRODUK = 4

function topY(elem) {
	let height = $("#nav-bar").height();
	return elem.offset().top - 
	($(window).scrollTop() <= height ? 2.0 * height : height);
}

function productUI(ui) {
	switch (ui) {
		case 0: return $('#product0');
		case 1: return $('#product1');
		case 2: return $('#product2');
		case 3: return $('#product3');
	}
}

function changeToBuyHTML(instruction, index) {
	window.location.href = "buy.html?img=Images/Product/" +
		instruction + "&index=" + index;
}

var isTransitioning = false;
function transitionProduct(from, to, elemHeight) {
	isTransitioning = true;

	var elemFrom = productUI(from);
	var elemTo = productUI(to);
	
	elemFrom.animate({ height: 0, opacity: 0 }, 500, function() {
		elemFrom.css("display", "none");
		elemTo.css("display", "flex");
		elemTo.height(0);
		elemTo.animate({ height: elemHeight, opacity: 1 }, 500);

		isTransitioning = false;
	});
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
		if (scroll <= topY($("#body-line")) - 10) {
			$("#home-btn").addClass("location");
			$("#koleksi-btn").removeClass("location");
			$("#spesialitas-btn").removeClass("location");
			$("#kontak-btn").removeClass("location");
		} else if (scroll < topY($("#specialty-line"))) {
			$("#home-btn").removeClass("location");
			$("#koleksi-btn").addClass("location");
			$("#spesialitas-btn").removeClass("location");
			$("#kontak-btn").removeClass("location");
		} else if (scroll < $(document).height() - $(window).height() - 20) {
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
	//call the function above
	$(window).scrollTop($(window).scrollTop() + 1);

	$("#home-btn").on("click", function() {
		$("html, body").animate({ scrollTop: 0 });
	});

	$("#koleksi-btn").on("click", function() {
		$("html, body").animate({ scrollTop: topY($("#body-line")) });
	});

	$("#spesialitas-btn").on("click", function() {
		$("html, body").animate({ scrollTop: topY($(".specialty")) });
	});

	$("#kontak-btn").on("click", function() {
		$("html, body").animate({ scrollTop: $(document).height() });
	});

	//UI produk pilihan
	$('.left-button').css('opacity', 0);
	const elemHeight = $('#product0').height();

	var uiIndex = 0;

	$('.left-button').on("click", function() {
		if (isTransitioning)
			return;
		
		if (uiIndex > 0) {
			transitionProduct(uiIndex, uiIndex -= 1, elemHeight);
		}

		if (uiIndex == 0)
			$('.left-button').css('opacity', 0);
		else
			$('.left-button').css('opacity', 1);
					
		if (uiIndex == MAX_PRODUK - 1)
			$('.right-button').css('opacity', 0);
		else
			$('.right-button').css('opacity', 1);
	});

	$('.right-button').on("click", function() {
		if (isTransitioning)
			return;

		if (uiIndex < MAX_PRODUK - 1) {
			transitionProduct(uiIndex, uiIndex += 1, elemHeight);
		}	
		
		if (uiIndex == 0)
			$('.left-button').css('opacity', 0);
		else
			$('.left-button').css('opacity', 1);

		if (uiIndex == MAX_PRODUK - 1)
			$('.right-button').css('opacity', 0);
		else
			$('.right-button').css('opacity', 1);
	});

	//change screens
	$('.s1-btn1').on("click", function() {
		window.location.href = "pelajari.html";
	});

	$('.s1-btn2').on("click", function() {
		window.location.href = "detail.html";
	});

	$('#lrc-sr-series-buy').on("click", function() {
		changeToBuyHTML('lrc-sr-series.png', -1);
	});

	$('#lrc-sr-series-buy-a').on("click", function() {
		changeToBuyHTML('lrc-sr-series.png', -1);
	});

	$('#lrc-x-series-buy').on("click", function() {
		changeToBuyHTML('lrc-x-series.jpg', 0);
	});

	$('#lrc-dominion-buy').on("click", function() {
		changeToBuyHTML('lrc-dominion.png', 1);
	});

	$('#lrc-undertaker-buy').on("click", function() {
		changeToBuyHTML('lrc-undertaker.jpg', 2);
	});

	$('#lrc-undertaker-pro-buy').on("click", function() {
		changeToBuyHTML('lrc-undertaker-pro.jpg', 3);
	});
});