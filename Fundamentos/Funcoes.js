//===================FORMAS DE CRIAR UMA FUNÇÃO==================//
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
