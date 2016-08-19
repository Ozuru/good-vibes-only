var intervalVibes;

navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

function startGoodVibes(length) {
  navigator.vibrate(length);
}

function stopGoodVibes() {
  clearInterval(intervalVibes);
}

function startRepeatingVibes(length, interval) {
  stopGoodVibes();
  intervalVibes = setInterval(function() {startGoodVibes(length)}, interval);
}

function startCustomVibes() {
	startRepeatingVibes(document.getElementById("length").value, document.getElementById("interval").value);
}