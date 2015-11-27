$(document).ready(function () {
	var total = 0;
	$('#a10').click(addTen);
	$('#a20').click(addTwenty);
	$('#a30').click(addThirty);
	$('#red').click(changeRed);
	$('#blue').click(changeBlue);
	$('#out').click(out);
	$('#n10').click(subTen);
	$('#n20').click(subTwenty);
	$('#n30').click(subThirty);
	

	function addTen (){
	total += 10;
	$('#out').text(total);
}
})