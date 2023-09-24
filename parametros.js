/**Parâmetros de função
 *  Parâmetros =  dados que iremos enviar quando formos chamar uma função.
 */
function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
};

console.log(nomeIdade("juliana", 40))

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log (multiplica(soma(4, 5)));

//Caso não queira usar muitos parâmetros, você pode declarar o valor das variáveis ainda dentro da função

