
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");//Para ser mais específico, coloque uma classe ou id como prefixo no ```query.Selector```
    var peso = tdPeso.textContent; //Dando um espaço na memória do computador para o peso dos pacientes;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhvalido = true
    var alturaEhvalida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("peso inválido");
        pesoEhvalido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
        
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida");
        alturaEhvalida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhvalida && pesoEhvalido) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc; //A ordem dos elementos impacta diretamente no código.
    }

}


function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(0);
}
    
