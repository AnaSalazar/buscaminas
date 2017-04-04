var casillaBomba = document.getElementsByClassName("bomba");

var casillaBomba1 = document.getElementById("cb1-1");
var casillaBomba2 = document.getElementById("cb2-3");
var casillaBomba3 = document.getElementById("cb2-4");
var casillaBomba4 = document.getElementById("cb3-1");
var casillaBomba5 = document.getElementById("cb4-2");

casillaBomba1.addEventListener("click", bombaEnAccion);
casillaBomba2.addEventListener("click", bombaEnAccion);
casillaBomba3.addEventListener("click", bombaEnAccion);
casillaBomba4.addEventListener("click", bombaEnAccion);
casillaBomba5.addEventListener("click", bombaEnAccion);

function bombaEnAccion() {
  this.style.background = "purple" ;
}
