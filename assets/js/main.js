//saco la longitud del arreglo que me regresa el ClassName
var longitudBombas = document.getElementsByClassName("bomba").length;
var longitudNumeros = document.getElementsByClassName("numero").length;
var longitudColores = document.getElementsByClassName("color").length;

//creo variables de arreglos vacios para guardar los elementos que me regresa el ClassName
var bombas = [];
var numeros = [];
var colores = [];

//guardo los elementos y le agrego el evento
for(var i = 0; i < longitudBombas; i++){
    bombas[i] = document.getElementsByClassName("bomba")[i];
    bombas[i].addEventListener("click", bombaEnAccion);
}

for(var i = 0; i < longitudNumeros; i++){
    numeros[i] = document.getElementsByClassName("numero")[i];
    numeros[i].addEventListener("click", numerosEnAccion);
}

for(var i = 0; i < longitudColores; i++){
    colores[i] = document.getElementsByClassName("color")[i];
    colores[i].addEventListener("click", colorEnAccion);
}

//funcion para cada clase
function numerosEnAccion() {
  this.style.color = "red";
  this.innerText = "¡1!";
}

function bombaEnAccion() {
  this.style.color = "red";
  this.innerText = "¡¡¡BOMBA!!!";
}

function colorEnAccion() {
  this.style.background = "purple";
}
