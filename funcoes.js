/**As funções servem para fazer com que o javacript execute um pedaço de código em uma ordem. Seja ela antes ou depois 
 * 1) Declara a função
 * 2) Executa a função (1 ou mais vezes)
*/

                    //String
function imprimeTexto(texto) {
    console.log(texto)
}

imprimeTexto(soma());


//Três formas de se escrever funões

function soma() {
    return 2 + 2;
}

console.log(soma());

