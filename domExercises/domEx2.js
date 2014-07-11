// Listen for a click on the div_1 id and update the
// count div's innerHTML count


window.onload = function() { 

var clicks = 0; 

var count = document.getElementById('div_1'); 
count.onclick = function(event) { 
	clicks += 1; 
};

console.log(clicks);







}

 
   