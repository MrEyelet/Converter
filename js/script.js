var btnAdd = document.getElementById('addElem');
var bunch_of_tiles = document.getElementById('bunch_of_tiles');

btnAdd.addEventListener('click', function() {
	//exchange rate calculations
	var userValue = document.getElementById("userValue").value;
	var randomNumber = Math.random() *100;
	var exchangeRate = 4.2 * (1+(randomNumber - 50)/1000);
	var yourMoney = userValue * exchangeRate;
	//date and time calculations
	var date = new Date();
	var n = date.toDateString();
	var time = date.toLocaleTimeString();
	
	//check if the value is a number + display money amount in a new tile
	if(userValue <= 0) {
		alert("Value must be greater than zero");
		bunch_of_tiles.innerHTML += '<div>' + 'pln amount' + '<br/>' + "wartość musi byc większa od zero"
	+ '<div>' + '<img src="img/clock.svg" alt="clock">' + '  ' + n + ' ' + time + '</div>' + '</div>';
	}else if(isNaN(userValue)) {
		alert("Value must be a number");
		bunch_of_tiles.innerHTML += '<div>' + 'pln amount' + '<br/>' + "błąd, wpisz liczbę"
	+ '<div>' + '<img src="img/clock.svg" alt="clock">' + '  ' + n + ' ' + time + '</div>' + '</div>';
	}else if(userValue > 0) {
		bunch_of_tiles.innerHTML += '<div>' + 'pln amount' + '<br/>' + yourMoney.toFixed(2)
	+ '<div>' + '<img src="img/clock.svg" alt="clock">' + '  ' + n + ' ' + time + '</div>' + '</div>';
	}
});
