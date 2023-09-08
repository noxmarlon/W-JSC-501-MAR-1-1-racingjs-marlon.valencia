var elemento = document.getElementById("click");
var clicks = 0;
elemento.onclick = function(){ 
        clicks++;
         elemento.innerHTML = clicks;
    
}
