var pricesAmsterdam = [1500, 500, 1800, 700];
var pricesLondon = [2500, 1500, 1000, 900];
var diff = 0;
var avgAmsterdam = calcAverage(pricesAmsterdam);
var avgLondon = calcAverage(pricesLondon);
var amsterdamData = ["Amsterdam", "Netherlands"];
var londonData = ["London", "United Kingdom"];

function calcAverage (numArray) {
	var sum = 0;
	for (var i = 0; i < numArray.length; i++) {
		sum += numArray[i];
	}
	return (sum / numArray.length);
}

//output city data
document.getElementById("avg-amsterdam").innerHTML =
"€ " + avgAmsterdam;
document.getElementById("avg-london").innerHTML =
"€ " + avgLondon;
var cities = document.getElementsByClassName("city");
//console.log(cities);
cities[0].innerHTML = amsterdamData[0];
cities[1].innerHTML = londonData[0];
var countries = document.getElementsByClassName("country");
countries[0].innerHTML = amsterdamData[1];
countries[1].innerHTML = londonData[1];


//output info message and price difference
if (avgAmsterdam == avgLondon) {
	document.getElementById("info-msg").innerHTML =
	"Both cities have the same average price.";
	document.getElementById("price-diff").innerHTML = "€ " + diff;
} else if (avgAmsterdam > avgLondon) {
	diff = avgAmsterdam - avgLondon;
	document.getElementById("info-msg").innerHTML =
	"<b>" + londonData[0] + "</b> will be more affordable than <b>" + amsterdamData[0] + "</b> for the New Year's celebration.<br><strong>Difference in Price:</strong>";
	document.getElementById("price-diff").innerHTML = "€ " + diff;
} else {
	diff = avgLondon - avgAmsterdam;
	document.getElementById("info-msg").innerHTML =
	"<b>" + amsterdamData[0] + "</b> will be more affordable than <b>" + londonData[0] + "</b> for the New Year's celebration.<br><strong>Difference in Price:</strong>";
	document.getElementById("price-diff").innerHTML = "€ " + diff;
}
