document.addEventListener("DOMContentLoaded", 
function () {
    s="15";
	var botonMM= document.getElementById("botonM")
    var botonMN= document.getElementById("botonN")
    var botonSS=document.getElementById("botonSS")
    var page = document.getElementsByTagName("body");
                    
                    
     botonMM.addEventListener("click", function (){s++; page[0].style.fontSize = s + 'px';});
     botonMN.addEventListener("click", function (){s--; page[0].style.fontSize = s + 'px';});
     botonSS.addEventListener("change",	function(){page[0].style.background = botonSS.value;});
			
});