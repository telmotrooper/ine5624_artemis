let timer = 3;

$(document).ready(function () {
	$(".photo").click(function() {
		console.log("Hey");
		if($(this).find("img").hasClass("selected-photo")) {
			$(this).find("img").removeClass("selected-photo");
		} else {
			$(this).find("img").addClass("selected-photo");
		}
	});
	
});