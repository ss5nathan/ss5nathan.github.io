/*
	Paradigm Shift by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

$(document).ready(function() {
	var img = document.getElementById("crop-this-image");
	var resultDiv = document.getElementById("crop-this-div");
	var cropinst;
	var toggle = false;
	$("#crop-this-button").on("click", function() {
		if (!toggle) {
			cropinst = new Croppie(img, {
				viewport: { width: 200, height: 200, type: "circle" },
				boundary: { width: img.clientWidth, height: img.clientHeight },
				enableOrientation: true,
				mouseWheelZoom: false
			});
			$(this).text("Click To Reset");
			resultDiv.innerHTML = "";

		} else {
			$(this).text("Try It Out");
			cropinst.destroy();
		}

		toggle = !toggle;
	});

	$("#github-button").on("click", function() {
		window.location = "https://github.com/ss5nathan/codeSamples"
	});

});
