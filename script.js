(function (window, document) {
	
	window.onload = function () {
		
		let celsius = document.getElementById("celsius");
		let fahrenheit= document.getElementById("fahrenheit");
		let kelvin = document.getElementById("kelvin");
		
		celsius.oninput = function() {
			fahrenheit.value = (celsius.valueAsNumber * 9/5) + 32;
			kelvin.value = celsius.valueAsNumber + 273.15;
		}
		
		fahrenheit.oninput = function() {
			celsius.value = (fahrenheit.valueAsNumber -32) * 5/9;
			kelvin.value = (fahrenheit.valueAsNumber +459.67) * 5/9;
		}
		
		kelvin.oninput = function() {
			celsius.value = kelvin.valueAsNumber-273.15;
			fahrenheit.value = (kelvin.valueAsNumber*9/5) - 459.67;
		}
		
	}
	
})(window, document);
