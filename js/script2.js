var btnAdd = document.getElementById('addElem');
var unorderedList = document.getElementById('list');
var items = document.getElementsByTagName('li');
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

btnAdd.addEventListener('click', function() {
	unorderedList.innerHTML += '<li>' + n + ' ' + time + '</li>';
});