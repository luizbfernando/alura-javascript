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
    //outros código
    //outros console.log()
    //Tente não escrever coisas depois da função return, isso vai fazer com que tudo o que for escrito depois dela não seja executado.
    return 2 + 2;
}

console.log(soma());

