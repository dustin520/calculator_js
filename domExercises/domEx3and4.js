    window.onload = function() { 
      var lastClicked =
      document.getElementById('last_clicked');
      var prevClicked = 
      document.getElementById('previously_clicked');
      
//       var setClickOnDiv = function(id) { 
//         var element = document.getElementById(id);
//         element.onclick = function() {
//           lastClicked.innerHTML = element.innerHTML; 
//         }
//       };
      
//       setClickOnDiv("div_1"); 
//       setClickOnDiv("div_2");
      
      
      var one = document.getElementById('div_1');
      one.onclick = function(event) { 
        prevClicked.innerHTML = lastClicked.innerHTML;
        lastClicked.innerHTML = one.innerHTML;           
      };
      
      var two = document.getElementById('div_2');
      two.onclick = function(event){ 
        prevClicked.innerHTML = lastClicked.innerHTML;
        lastClicked.innerHTML = two.innerHTML;   
      };
      
      var three = document.getElementById('div_3');
      three.onclick = function(event){
        prevClicked.innerHTML = lastClicked.innerHTML;
        lastClicked.innerHTML = three.innerHTML;   
      };
      
      var four = document.getElementById('div_4');
      four.onclick = function(event){
        prevClicked.innerHTML = lastClicked.innerHTML;
        lastClicked.innerHTML = four.innerHTML;   
      };
      
      var five = document.getElementById('div_5');
      five.onclick = function(event) { 
        prevClicked.innerHTML = lastClicked.innerHTML;
        lastClicked.innerHTML = five.innerHTML;   
      };
      
   };  