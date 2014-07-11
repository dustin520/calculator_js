// 5.) Listen for a click on div_1 through div_5 and each time 
// something is clicked change its color to blue element with the 
// content from the div. On each click update the previously_clicked 
// element with content from the previously clicked element.

// (Hint: you need a global variable to hold the currently
// 	Clicked content that you should use to update the 
// 	previously_clicked div).




window.onload = function() {

var previously_clicked = document.getElementById('previously_clicked'); 

	var divOne = document.getElementById('div_1');
	divOne.onclick = function (event) { 
		divOne.style.color = "blue"; 
		previously_clicked.innerHTML = divOne.innerHTML;
	};

	var divTwo = document.getElementById('div_2');
	divTwo.onclick = function (event) { 
		divTwo.style.color = "blue"; 
		previously_clicked.innerHTML = divTwo.innerHTML;
	};

	var divThree = document.getElementById('div_3');
	divThree.onclick = function (event) { 
		divThree.style.color = "blue"; 
		previously_clicked.innerHTML = divThree.innerHTML;
	};

	var divFour = document.getElementById('div_4');
	divFour.onclick = function (event) { 
		divFour.style.color = "blue"; 
		previously_clicked.innerHTML = divFour.innerHTML;
	};

	var divFive = document.getElementById('div_5');
	divFive.onclick = function (event) { 
		divFive.style.color = "blue"; 
		previously_clicked.innerHTML = divFive.innerHTML;
	};

};