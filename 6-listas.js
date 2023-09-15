console.log(`Trabalhando com listas`);
const Salvador = `Salvador`;
const SaoPaulo = `São Paulo`;
const RiodeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`) //Adicionando um item na lista externamente
console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

listaDeDestinos.splice(3,1);
/* Splice serve para deletar um item de um array (lita) */
/* A contagem no js sempre começa por 0 e não por 1 */
console.log(`Destinos possíveis`);
console.log(listaDeDestinos[1]);