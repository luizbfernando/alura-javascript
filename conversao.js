/**Conversão de tipos
 * Conversão inplícita e explicita
 * Number ()
 * String ()
 * console.log(numero == numeroString) Conversão inplícita
 *  console.log(numero + numeroString). Concatenação indesejada
 * Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis
 * Console.log (+ largura * + altura)
 * 
 */

const numero = 456;
const numeroString = "456";

console.log(numero + Number(numeroString)); //Concatenação indesejada
