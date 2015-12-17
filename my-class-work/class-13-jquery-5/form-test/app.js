$(document).ready(function (event) {
	event.preventDefault()
	$('#myForm').submit(function (){
	var name =	$('#name-input').val()
	$('#target').text(name)
})
})
