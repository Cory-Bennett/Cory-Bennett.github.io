document.getElementById('click-me').onclick = calculateMe;
function calculateMe () {
	var age = document.getElementById('age').value;
	var oldAge = document.getElementById('max-age').value;
	var favDrink = document.getElementById('item').value;
	var drinksPerDay = document.getElementById('num-per-day').value;
	var numOfDrinks = (oldAge - age) * 365 * drinksPerDay; 
	var drinkName = document.getElementById('item').value;
	document.getElementById('solution').innerHTML = drinkName; 
	document.getElementById('drink').innerHTML = numOfDrinks;
console.log(drinkName,numOfDrinks)

}