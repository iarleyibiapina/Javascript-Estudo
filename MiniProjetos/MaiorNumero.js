// Achar maior valor em um elemento

/**
 * Retorna o maior numero entre dois numeros passados como param
 * @param   {int} valorDois - elemento comparador
 * @param   {int} valorUm   - elemento que vai ser comparado
 * @returns {int} value     - maior valor encontrado
 */
function maiorValorEntreDoisInteiros(valorUm, valorDois)
{
    return valorUm > valorDois ?  valorUm : valorDois;
}
// console.log(maiorValorEntreDoisInteiros(40,20));

// acha maior valor em array
let aArr = [10, 15, 5, 0, 20, 30, 10];
/**
 * Retorna o maior numero em um array
 * @param {Array} elemento 
 * @returns {int} value - maior valor encontrado
*/
function maiorValorEmArray(elemento) {
    let temporaria = elemento[0];
    for (valor of elemento) {
        temporaria < valor ? temporaria = valor : temporaria;
    }
    return temporaria;
}
// console.log(maiorValorEmArray(aArr));

// acha maior valor em objeto
let aObj = {primeiro: 10, segundo: 15, terceiro: 120 , quarto: 0};
/**
 * Retorna o maior numero em um objeto
 * @param {object} elemento 
 * @returns {int} value - maior valor encontrado
*/
function maiorValorEmObjeto(elemento){
    // esta função pega a primeira chave do objeto
    let primeiraChaveObjeto = Object.keys(elemento)[0];
    let temporaria = elemento[primeiraChaveObjeto];
    for (valor in elemento) {
        temporaria < elemento[valor] ? temporaria = elemento[valor] : temporaria;
    }
    return temporaria;
}
// console.log(maiorValorEmObjeto(aObj));