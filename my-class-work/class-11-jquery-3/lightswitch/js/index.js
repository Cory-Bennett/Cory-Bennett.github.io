$(document).ready(function () {

	var lights = 'on';
	$('lightswitch').click(function (){
		if lights == "on"){
			$('body').css("background-color", "white");
		} else {
			$('body').css("background-color", "black")
		}
	})

})
