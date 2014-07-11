// 6.) Building off the last example, listen for a click on the 
// previously_clicked element. When clicked, make the currently
// Clicked div have a white backgroundColor and use the number it's 
// displaying to change the respective div to have background color blue.


window.onload = function() {

var previously_clicked = document.getElementById('previously_clicked'); 

	var divOne = document.getElementById('div_1');
	divOne.onclick = function (event) { 
		var color = divOne.style.color = "blue"; 
		divOne.style.backgroundColor = "white";
		previously_clicked.innerHTML = divOne.innerHTML;
		if 
	};

	var divTwo = document.getElementById('div_2');
	divTwo.onclick = function (event) { 
		divTwo.style.color = "blue"; 
		divTwo.style.backgroundColor = "white";
		previously_clicked.innerHTML = divTwo.innerHTML;
	};

	var divThree = document.getElementById('div_3');
	divThree.onclick = function (event) { 
		divThree.style.color = "blue"; 
		divThree.style.backgroundColor = "white";
		previously_clicked.innerHTML = divThree.innerHTML;
	};

	var divFour = document.getElementById('div_4');
	divFour.onclick = function (event) { 
		divFour.style.color = "blue"; 
		divFour.style.backgroundColor = "white";
		previously_clicked.innerHTML = divFour.innerHTML;
	};

	var divFive = document.getElementById('div_5');
	divFive.onclick = function (event) { 
		divFive.style.color = "blue"; 
		divFive.style.backgroundColor = "white";
		previously_clicked.innerHTML = divFive.innerHTML;
	};

};


