
//$(document).ready(function (){
//$('#clickme').click(tellFortune)
//function tellFortune () {
//var hometown =  $('#hometown').val();
//var partner = $('#partner').val();
//var numKids = $('#numKids').val();
//var jobTitle = $('#jobTitle').val();	
//var fortuneStr =  "You will be a " +jobTitle+ " in "+ hometown+" , and married to "+partner+" with " +numKids+" kids";
//$('#output').text(fortuneStr);
//}
//
//})

$(document).ready(function () {
	$('#clickme').click(getFortune)
	function getFortune () {
		var hometown = $('#hometown').val();
		var partner = $('#partner').val();
		var numKids = $('#numKids').val();
		var jobTitle = $('#jobTitle').val();
		var fortuneStr = "You will be a " + jobTitle + " living in "
		+ hometown + " married to " + partner + " with " + numKids + " kids."//
		$('#output').text(fortuneStr)
	}// end getFortune
​
})
//JS
//document.getElementById('clickme').onclick= tellFortune;

//function tellFortune () {
//var hometown = document.getElementById('hometown').value;
//var partner = document.getElementById('partner').value;
//var numKids = document.getElementById('numKids').value;
//var jobTitle = document.getElementById('jobTitle').value;
//var fortuneStr =  "You will be a " +jobTitle+ " in "+ hometown+" , and married to "+partner+" with " +numKids+" kids";
//document.getElementById('output').innerHTML = fortuneStr;
//console.log(output)
//}