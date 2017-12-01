var pricesAmsterdam = [1500, 500, 1800, 700];
var pricesLondon = [2500, 1500, 1000, 900];
var diff = 0;

function calcAverage (numArray) {
	var sum = 0;
	for (var i = 0; i < numArray.length; i++) {
		sum += numArray[i];
	}
	return (sum / numArray.length);
}

//output average
document.getElementById("avg-amsterdam").innerHTML =
"€ " + calcAverage(pricesAmsterdam);
document.getElementById("avg-london").innerHTML =
"€ " + calcAverage(pricesLondon);

//output info message and price difference
if (calcAverage(pricesAmsterdam) >= calcAverage(pricesLondon)) {
	diff = calcAverage(pricesAmsterdam) - calcAverage(pricesLondon);
	document.getElementById("info-msg").innerHTML =
	"<b>London</b> will be more affordable than <b>Amsterdam</b> for the New Year's celebration.<br><strong>Difference in Price:</strong>";
	document.getElementById("price-diff").innerHTML = "€ " + diff;

} else {
	diff = calcAverage(pricesLondon) - calcAverage(pricesAmsterdam);
	document.getElementById("info-msg").innerHTML =
	"<b>Amsterdam</b> will be more affordable than <b>London</b> for the New Year's celebration.<br><strong>Difference in Price:</strong>";
	document.getElementById("price-diff").innerHTML = "€ " + diff;
}
