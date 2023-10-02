var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//Validação de conteúdo com operadores lógicos
var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido"
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválido");
    alturaValida = false;
    tdImc.textContent = "Altura inválida"
}


if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura); // 100wd
    tdImc.textContent = imc;
}






