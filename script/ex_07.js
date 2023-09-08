var canvas = document.getElementById("canvas");
var pause = document.getElementById("pause");
var stopp= document.getElementById("stop");
var mute= document.getElementById("mute");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(6, 6);
ctx.lineTo(14, 10);
ctx.lineTo(6, 14);
// ctx.strokeStyle = '#FFFFFF'; 
ctx.lineWidth = 1;
ctx.closePath();
ctx.fill();
// ctx.stroke();

const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.style.display = "none"; // <-- oculto
    return sonido;
};
const sonido = cargarSonido("triangle.ogg");
canvas.onclick = () => {
    sonido.play();
};

pause.onclick = () => {
    sonido.pause();
};
stopp.onclick = () => {
    sonido.pause();
    sonido.currentTime=0;

};
mute.onclick = () => {
    sonido.muted=true;
};



