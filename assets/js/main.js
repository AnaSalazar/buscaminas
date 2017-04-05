var documento = document.addEventListener("click", sigueJugando);

var tabla = document.getElementById("tablita");
tabla.addEventListener("click", jugando);

var botonReinicio = document.getElementById("reinicio");
botonReinicio.addEventListener("click", reinicio);

//saco la longitud del arreglo que me regresa el ClassName
var longitudBombas = document.getElementsByClassName("bomba").length;
var longitudNumeros = document.getElementsByClassName("numero").length;
var longitudColores = document.getElementsByClassName("color").length;

//creo variables de arreglos vacios para guardar los elementos que me regresa el ClassName
var bombas = [];
var numeros = [];
var colores = [];

//guardo los elementos y les agrego el evento
function ciclosNecesarios() {

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
}

//funcion para cada clase
function numerosEnAccion() {
  this.style.background = "#E2A9F3";
  this.style.color = "blue";
  this.align ="center";
  this.innerText = "¡1!";
}

function bombaEnAccion() {
  this.style.background = "#F6E3CE";
  this.align ="center";
  this.style.color = "red";
  this.innerText = "¡¡¡BOMBA!!!";
  setTimeout(function(){alert("Esto ha explotado");}, 200);
}

function colorEnAccion() {
  this.style.background = "white";
}

function sigueJugando() {
  alert("Sigue jugando");
}

function jugando() {
  event.stopPropagation();
}

function reinicio() {
    document.getElementById("TablaBuscaminas").reset;
    jugando();
}

ciclosNecesarios();
