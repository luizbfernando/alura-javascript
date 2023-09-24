/**Arrow function serve para encurtar a sua função */
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;   

//Exemplo de arrow function com mais de uma linha;

const somaSmalNum = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente de números de 1 á 9" 
    }

    else {
        return num1 + num2
    }
}

console.log(somaSmalNum(5, 2))
 