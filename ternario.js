/** if (idadeCliente >= idadeMinima) {
  * console.log("Cerveja")
  *  }
  * else {
  * console.log("Suco")
  * }
  * Uma boa prática é não usar o operador ternário quando se envolve várias linhas de código. Isto pode dificultar a leitura do código, prejudicando futuras manutenções
*/

const idadeMinima = 18;
const idadeCliente = 16;

             //Condição                     //True    //False
console.log (idadeCliente >= idadeMinima ? "Cerveja" : "Suco") 