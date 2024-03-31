//===================DATAS==================//
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// Instanciando um objeto, que ja retorna com um formato

const data = new Date();
// definindo uma data para retornar o dia
// ano, mes, dia, horas, minuto (conta a partir de 0)
const dia = new Date(2000,0,10,9,40);

console.log(dia);

/* Date possui metodos getters e setters
convertendo data em string
.toDateString()
.toTimeString()
.toISOString() - formato do banco de dadosl
 */

//=============================================================================//