var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes.length);

for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);
    var paciente = pacientes[i];

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
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválido");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }


    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura); // 100wd
        tdImc.textContent = imc.toFixed(2);
        //toFixed define a quantidade de casas decimais que você quer limitar;
    }

}

var botaAdicionar = document.querySelector("#adicionar-paciente");

botaAdicionar.addEventListener("click", function () {
    console.log("Cliquei no botão!")
})



