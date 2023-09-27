var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");

var imc = peso / altura * altura; // 100


console.log (paciente);//tr
console.log (tdAltura);//td
console.log (altura);//Obter 100