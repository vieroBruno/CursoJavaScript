var nomeVec1 = prompt("Nome do veiculo 1: ")
var velVec1 = parseFloat(prompt("Velocidade do veiculo 1 (Km/h)"))

var nomeVec2 = prompt("Nome do veiculo 2: ")
var velVec2 = parseFloat(prompt("Velocidade do veiculo 2(Km/h)"))

if (velVec1 > velVec2) {
    alert(nomeVec1 + " é mais rápido\nCom: " + velVec1 + " Km/h")

} else if (velVec2 > velVec1) {
    alert(nomeVec2 + " é mais rápido\nCom: " + velVec2 + " Km/h")

} else {
    alert("Os dois veículos possuem a mesma velocidade com " + velVec1 + " Km/h");
}