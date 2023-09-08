var vueltas =0;
var text = new String("");
var pressed_key = document.addEventListener("keypress",function (event)
 {
	var exercice = document.getElementById("prueba");
					
	text += String.fromCharCode(event.keyCode);
         if (vueltas > 41)
           {
             text =  text.substring(1, 43);
           }
             exercice.innerHTML = text;
                  vueltas++;
	});