// 1. `calculator.js` is provided and linked to the page for you, but it's blank,
// what's the first thing you write? (Without it, your JS won't be able to find any
// HTML elements on the page---why?)
// 2. Once you're able to get the elements on the page, you want to know about
// clicks to the buttons. How can you listen to `click` events on all the buttons?
// (Remember exercises 3 and 4?) For debugging purposes, make sure you can get it
// so something is logged to the console whenever a button is clicked.
// 3. Great, now you know when clicks happen. What do you want to do when clicks
// happen? Do you want to the number display? Update the operator display? Clear a
// display? The answer to each of those is "sometimes", right? When, then? How do
// you decide what to do?


/* Pseudo 
	Create calculator app
	- req html, css, js file
	In JS: 
		- define number of variables needed = 
		- define concepts required = conditionals, calling/getting elements, listeners, 
		changing fields/elements

		1. 16 buttons each 
		2. assign values to each button 
		3. create listeners for each one - .onClick
		4. onClick, needs to store value in var the changing var
		5. display value in calc/num field 
		6. conditional- to either add more numbers if click numbers, or clear display if 
			click operator
		7. once done storing all buttons, 
		8. create new var with value of all buttons clicked and saved when clicking operator
		9. save operator in var
		10. repeat new var value for each number
		11. take all numbers in second entry into one number, new variable
		12. then expect, when press equal or enter sign, calculate result of Math and display on field 
		13. replace field with answer 
*/


window.onload = function(){

	var firstEntry = ""; 
	var operator = "";
	var secondEntry = "";
	var finalAnswer = "";

	var operDisplay = document.getElementById("operator_display");
	var resultDisplay = document.getElementById("result_display_value");



	var zeroButton = document.getElementById('zero');
	zeroButton.onclick = function(event) { 
		firstEntry += zeroButton.innerHTML; 
		resultDisplay.innerHTML = firstEntry; 

	}

	var oneButton = document.getElementById('one');
	oneButton.onclick = function(event) { 
		firstEntry += oneButton.innerHTML;
		resultDisplay.innerHTML = firstEntry;
	}

	var twoButton = document.getElementById('two');
	twoButton.onclick = function(event) { 
		firstEntry += twoButton.innerHTML;
		resultDisplay.innerHTML = firstEntry;
	}

	var threeButton = document.getElementById('three');
	threeButton.onclick = function(event) { 
		firstEntry += threeButton.innerHTML;
		resultDisplay.innerHTML = firstEntry;;
	}

	var fourButton = document.getElementById('four');
	fourButton.onclick = function(event) { 
		firstEntry += fourButton.innerHTML;
		resultDisplay.innerHTML = firstEntry;
	}

	var fiveButton = document.getElementById('five');
	fiveButton.onclick = function(event) { 
		firstEntry += fiveButton.innerHTML;
		resultDisplay.innerHTML = firstEntry;
	}

	var sixButton = document.getElementById('six');
	sixButton.onclick = function(event) { 
		firstEntry += sixButton.innerHTML;
		resultDisplay.innerHTML = firstEntry;
	}

	var sevenButton = document.getElementById('seven');
	sevenButton.onclick = function(event) { 
		firstEntry += sevenButton.innerHTML;
		resultDisplay.innerHTML = firstEntry;
	}

	var eightButton = document.getElementById('eight');
	eightButton.onclick = function(event) { 
		firstEntry += eightButton.innerHTML;
		resultDisplay.innerHTML = firstEntry;
	}

	var nineButton = document.getElementById('nine');
	nineButton.onclick = function(event) { 
		// if (operDisplay.innerHTML !== plusButton.innerHTML){
		firstEntry += nineButton.innerHTML;
		resultDisplay.innerHTML = firstEntry;
		// }else{
		// secondEntry += nineButton.innerHTML;
		// // resultDisplay.innerHTML = secondEntry; 
		// };
	}

	var plusButton = document.getElementById('plus');
	// for(var i = 1; i < 2; i++){
	plusButton.onclick = function(event) { 
		operDisplay.innerHTML = plusButton.innerHTML;
		resultDisplay.innerHTML = ""; 

	// 	if (operDisplay.innerHTML == plusButton.innerHTML){ 
	// 	operator = 1; 
	// 	console.log(operator);
	// 	};
	// };
	}

	var minusButton = document.getElementById('minus');
	minusButton.onclick = function(event) { 
		operDisplay.innerHTML = minusButton.innerHTML;
		resultDisplay.innerHTML = ""; 
	}

	var multiplyButton = document.getElementById('multiply');
	multiplyButton.onclick = function(event) { 
		operDisplay.innerHTML = multiplyButton.innerHTML;
		resultDisplay.innerHTML = ""; 
	}

	var divideButton = document.getElementById('divide');
	divideButton.onclick = function(event) { 
		operDisplay.innerHTML = divideButton.innerHTML;
		resultDisplay.innerHTML = ""; 
	}

	var clearButton = document.getElementById('clear');	
	clearButton.onclick = function(event) { 
		resultDisplay.innerHTML = 0;
		firstEntry = "";
		secondEntry = "";
		operDisplay.innerHTML = ""; 
	}

	var enterButton = document.getElementById('enter');
	enterButton.onclick = function(event) { 
		resultDisplay.innerHTML = finalAnswer;
		//console.log to test if firstEntry gets saved
		console.log(firstEntry);
		firstEntry = "";
		secondEntry = ""; 
		finalAnswer = ""; 
	}





}













