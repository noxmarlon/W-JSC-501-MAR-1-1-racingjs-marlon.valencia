var div;
var but;
var div1;
var div2;
var button;
window.onload = function () {
	div = document.createElement("div");
	but = document.createElement("button");
	document.querySelectorAll(".exercice>footer")[0].insertBefore(div, null);
        document.querySelectorAll(".exercice>footer>div")[1].insertBefore(but, null);
	div1 = document.querySelectorAll(".exercice>footer>div")[0];
	div2 = document.querySelectorAll(".exercice>footer>div")[1];
	button = div2.firstElementChild;
	button.style.width = "75%";
	button.style.height = "35px";
	button.innerHTML = "Supprimer le cookie";
	div2.style.display = "none";
	div1.firstElementChild.addEventListener("click", function() {
		div2.style.display = "block";
		div1.firstElementChild.style.visibility = "hidden";
		div1.style.color = "rgba(0,0,0,0)";
		crearcookie("acceptsCookies", true, 1);
	});
	button.addEventListener("click", function() {
		div2.style.display = "none";
		div1.firstElementChild.style.visibility = "visible";
		div1.style.color = "rgba(0,0,0,100)";
		borrarcookie("acceptsCookies");	
	});
};

function crearcookie(cookienombre, cvalor, diasper) {
    var d = new Date();
    d.setTime(d.getTime() + (diasper*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cookienombre + "=" + cvalor + ";" + expires + ";path=/";
}

function borrarcookie(cookienombre) {
    crearcookie(cookienombre,"",-1);
} 