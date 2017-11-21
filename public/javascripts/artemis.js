let timer = 3;

$(document).ready(function () {
	$("a").click(function() {
		let i = setInterval(function () {
			if (timer == 0) {
				window.location.replace("/pictures/");
				clearInterval(i);
			}

			timer--;
		}, 1000);
	});
	
});