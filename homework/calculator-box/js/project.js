$(document).ready(function () {
	var total = 0;

$('.math div').click(function () {
        var num = $(this).text()
        num = parseInt(num)
        total = total + num
        $("#out").html(total);
    })




// 	$('#a10').click(addTen);
// 	$('#a20').click(addTwenty);
// 	$('#a30').click(addThirty);
// 	$('#red').click(changeRed);
// 	$('#blue').click(changeBlue);
// 	$('#out').click(out);
// 	$('#n10').click(subTen);
// 	$('#n20').click(subTwenty);
// 	$('#n30').click(subThirty);
	

// 	function addTen (){
// 	total += 10;
// 	$('#out').text(total);
// 	}
// 	function addTwenty (){
// 		total += 20;
// 		$('#out').text(total);
// 	}
// 	function addThirty (){
// 		total += 30;
// 		$('#out').text(total);
// 	}
// 	function subTen (){
// 	total -= 10;
// 	$('#out').text(total);
// 	}
// 	function subTwenty (){
// 		total -= 20;
// 		$('#out').text(total);
// 	}
// 	function subThirty (){
// 		total -= 30;
// 		$('#out').text(total);
// 	}
// 	function changeRed (){
// 		$('#out').style.backgroundColor = '#FF0000';
// 	}
// 	function changeBlue (){
// 		$('#out').style.backgroundColor ='#0000FF';
// 	}
// 	function changeBlue (){
// 		$('#out').style.backgroundColor ='#000000';
// 	}
})