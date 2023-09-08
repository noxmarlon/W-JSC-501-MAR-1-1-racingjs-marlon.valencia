var tablero;
var div;
var cosa;
var resX;
var resY;
var diffX;
var diffY;

window.onload = function () {
    tablero = document.querySelectorAll(".exercice>footer>div>canvas");
    div = document.querySelectorAll(".exercice>footer>div");
    tablero[0].setAttribute("draggable", true);
    tablero[0].setAttribute("ondragstart","poss(event)");
    tablero[0].setAttribute("id","cuadrado");
    div[0].setAttribute("ondrop","poner(event)");
    div[0].setAttribute("ondragover","activardrop(event)");
    // div[0].setAttribute("ondragleave", "dropL(event)");
    // div[0].setAttribute("ondragenter","dropE(event)");
    tablero[0].style.position = "relative";
    cosa = tablero[0].getBoundingClientRect();
    cambiartexto(0,0);
    };

    function poss(ev)
    {
        // ev.dataTransfer.setData("text", ev.target.id);
        var Did = tablero[0].getBoundingClientRect();
        var x = ev.clientX;
        var y = ev.clientY;
        diffX = x - Did.left;
        diffY = y - Did.top;
        
    }
    function poner(ev)
    {
        ev.preventDefault();
        // var data = ev.dataTransfer.getData("text");
        var x = ev.clientX;
        var y = ev.clientY;
        resX = x - cosa.left - diffX;
        resY = y - cosa.top - diffX;
        tablero[0].style.top = resY + "px";
		tablero[0].style.left = resX + "px";
		cambiartexto(resX,resY);
        
    }
    function activardrop(ev)
    {
        ev.preventDefault();

    } 
    function cambiartexto(x,y) {
        div[1].innerHTML = 
      "Nouvelles coordonnées => {x:" + x + "px" + ", y:" + y + "px" +"}";
    }
