// ;

// recebe como param um: int, array ou object;
// e retorna maior valor


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
console.log(maiorValorEntreDoisInteiros(40,20));

/**
 * Retorna o maior numero em um array
 * @param {Array} elemento 
 * @returns {int} value - maior valor encontrado
*/
// acha maior valor em array
let aArr = [10];
function maiorValorEmArray(elemento) {

}
// console.log(maiorValor(aArr));

/**
 * Retorna o maior numero em um objeto
 * @param {object} elemento 
 * @returns {int} value - maior valor encontrado
*/
// acha maior valor em objeto
let aObj = {chave: 10};
function maiorValorEmObjeto(elemento){
    
}
// console.log(maiorValor(aObj));