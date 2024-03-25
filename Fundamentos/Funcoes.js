//===================FORMAS DE CRIAR UMA FUNÇÃO==================//
//
//===================TRADICIONAL==================//
function primeiro() {
  return 1;
}
//=============================================================================//
//
//===================VARIAVEL==================//
let segundo = function () {
  return 2;
};
//=============================================================================//
//
//===================FUNÇÃO ANONIMA==================//
// usada em callbacks
// function(){
//     return 3;
// }
//=============================================================================//
//
//===================ARROW FUNCTION==================//
// usada em callbacks(como funçao anonima) e/ou com variaveis
let terceira = () => {
  return 4;
};
// quando apenas 1 parametro - () - pode ser omitido
//=============================================================================//
//
//===================DENTRO DE OBJETOS==================//
// aqui dentro nao precisa usar o =
// tambem possivel usar =>
const objeto = {
  funcaoDentroObjeto() {
    return 5;
  },
  chave: () => {
    return 6;
  },
};
//=============================================================================//
//
//===================PARAMETROS==================//
const soma = (valorUm, valorDois) => {
  // as variaveis declaradas como parametro, só funcionara dentro DESTE escopo;
  // as variaveis podem até ter o mesmo nome de uma variavel GLOBAL EXTERNA, pórem terá
  // outro valor aqui dentro, pois sera usada apenas aqui dentro.
  // sempre diminuir o numero de parametros.
  return valorUm + valorDois;
}
// executando uma funçao dentro da outra.
const especial = (func) => {
  return func;
}
// extra: criado uma funçao por meio de uma variavel e arrow function, sendo assim a função
// é executando apenas 'chamando' a variavel sem o uso do () - quando sem parametros;

// agora chamando por meio do ()
function subtracao(valorUm, valorDois) 
{
  return valorUm - valorDois;
}

function especialDeNovo(x, y)
{
  // quando usado () a funçao é executada dentro da outra. 
  // em outros casos, podemos executar x ou y funçoes em outros escopos desta forma.

  // executaA();
  // executaB();
  // executaC();
  // por fim
  let resultado = subtracao(x,y);
  return resultado;
}

function exibe(){
  console.log(soma(5, 15));
  console.log(especial(soma(5, 15)));
  console.log(especialDeNovo(50,25));
}
// exibe();
// extra: as duas são consts, mas nao estou alterando seu valor apenas passando o parametro
//=============================================================================//
// 
//===================NOMEAÇÃO==================//
/* 
 -camelCase

 -verboSubstantivo
 exemplo:
  alteraCor
  ativaFundo
  trocaPosicao

  -funçoes devem SEMPRE fazer UMA função, reduzir a função a um unico papel
  -reduzir tambem o numero de PARAMETROS para somente 1 quando possivel
  -modularizar e separar funçoes para tentar resolver os padroes acima citados.

*/
